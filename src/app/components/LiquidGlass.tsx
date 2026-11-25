"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BEZEL = 16; // px, width of the curved lens band along the edge; everything inside it is left untouched
const MAX_SHIFT = 18; // px, how far the backdrop is bent at the strongest point of the band
const N_GLASS = 1.5;
const SAMPLES = 128;
const SVG_NS = "http://www.w3.org/2000/svg";
let nextId = 0;

// Sideways push of a ray going straight down through a convex squircle rim (height 1 - (1 - t)^4) at each distance from the border (Snell).
// Normalized to 0..1: strongest at the border where the rim is steepest, zero where the flat interior starts.
const PROFILE = (() => {
  const eta = 1 / N_GLASS;
  const raw = Array.from({ length: SAMPLES }, (_, s) => {
    const t = s / (SAMPLES - 1);
    const slope = 4 * Math.pow(1 - t, 3) * 1.4; // rim slope, for a glass 1.4x as thick as the band is wide
    const len = Math.hypot(slope, 1);
    const cosi = 1 / len;
    return (eta * cosi + Math.sqrt(1 - eta * eta * (1 - cosi * cosi))) * (slope / len);
  });
  return raw.map((v) => v / raw[0]);
})();
if (process.env.NODE_ENV !== "production") {
  console.assert(PROFILE[0] === 1 && PROFILE[SAMPLES - 1] === 0 && PROFILE.every(Number.isFinite), "liquid glass lens profile");
}

// Displacement map for feDisplacementMap: R = x shift, G = y shift, 128 = none. Resolves to a blob URL the caller must revoke.
async function buildDisplacementMap(w: number, h: number, radius: number) {
  const bezel = Math.min(BEZEL, w / 2, h / 2);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const image = ctx.createImageData(w, h);
  const data = image.data;
  new Uint32Array(data.buffer).fill(0xff808080); // every pixel neutral and opaque (RGBA bytes on a little-endian CPU)

  // Only the band along the edge bends. Rows between the top and bottom bands are visited in their first and last
  // `band` columns only, so the cost follows the perimeter instead of the area.
  const band = Math.ceil(bezel);
  const cornerX = w / 2 - radius; // center of the corner arcs, measured from the element center
  const cornerY = h / 2 - radius;
  for (let py = 0; py < h; py++) {
    const edgeRow = py < band || py >= h - band;
    for (let px = 0; px < w; px++) {
      if (!edgeRow && px === band && w - band > band) px = w - band;
      const i = (py * w + px) * 4;
      const x = px + 0.5 - w / 2;
      const y = py + 0.5 - h / 2;
      // Distance inside the rounded-rect edge and the outward edge direction (nx, ny), in the positive quadrant.
      const qx = Math.abs(x) - cornerX;
      const qy = Math.abs(y) - cornerY;
      let nx = 0;
      let ny = 0;
      let inner: number;
      if (qx > 0 && qy > 0) {
        const len = Math.sqrt(qx * qx + qy * qy);
        inner = radius - len;
        nx = qx / len;
        ny = qy / len;
      } else if (qx > qy) {
        inner = radius - qx;
        nx = 1;
      } else {
        inner = radius - qy;
        ny = 1;
      }
      if (inner < 0 || inner >= bezel) continue;

      // Sample from further inside, against the outward edge direction: Chromium clips the backdrop to the element, so sampling outward reads nothing.
      const mag = PROFILE[Math.round((inner / bezel) * (SAMPLES - 1))] * 127;
      data[i] = Math.round(128 - (x < 0 ? -nx : nx) * mag);
      data[i + 1] = Math.round(128 - (y < 0 ? -ny : ny) * mag);
    }
  }

  if (process.env.NODE_ENV !== "production" && w > band * 2 && h > band * 2) {
    const center = ((h >> 1) * w + (w >> 1)) * 4;
    console.assert(data[center] === 128 && data[center + 1] === 128 && data[(w >> 1) * 4 + 1] !== 128, "liquid glass map: flat center, bent top edge");
  }
  ctx.putImageData(image, 0, 0);
  // toBlob encodes the PNG off the main thread; toDataURL did it inline and was the largest cost of a map.
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("liquid glass map could not be encoded");
  const url = URL.createObjectURL(blob);
  // Decode before the filter uses it, so the element never renders a frame with an empty map.
  const preload = new Image();
  preload.src = url;
  await preload.decode();
  return url;
}

async function buildFilter(w: number, h: number, radius: number, blur: number) {
  const mapUrl = await buildDisplacementMap(w, h, radius);
  const el = (name: string, attrs: Record<string, string | number>) => {
    const node = document.createElementNS(SVG_NS, name);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, String(value));
    return node;
  };
  const filter = el("filter", { id: `liquid-glass-${nextId++}`, x: 0, y: 0, width: w, height: h, filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" });
  filter.append(
    el("feImage", { href: mapUrl, x: 0, y: 0, width: w, height: h, result: "map" }),
    el("feDisplacementMap", { in: "SourceGraphic", in2: "map", scale: MAX_SHIFT * 2, xChannelSelector: "R", yChannelSelector: "G" }),
  );
  // Only surfaces that ask for it (the header) blur; a panel's interior shows the backdrop as it is.
  if (blur > 0) filter.append(el("feGaussianBlur", { stdDeviation: blur }));
  return { filter, mapUrl };
}

// Safari parses a url() backdrop-filter but paints nothing, so @supports cannot gate it: check the engine.
function isChromium() {
  const brands = (navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } }).userAgentData?.brands;
  if (brands) return brands.some((b) => /Chromium|Google Chrome|Microsoft Edge/i.test(b.brand));
  return /Chrome\//.test(navigator.userAgent);
}

/**
 * Gives every .liquid-glass element a lens filter sized to it (same-size elements share one) and sets it
 * as the element's backdrop-filter. Blur comes from the element's --glass-blur. Chromium only; elsewhere
 * the plain blur from globals.css stays.
 */
export default function LiquidGlass() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isChromium()) return;
    // These settings turn glass into a plain surface in globals.css, so there is nothing to refract.
    if (matchMedia("(prefers-reduced-transparency: reduce), (prefers-contrast: more), (forced-colors: active)").matches) return;

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "fixed";
    document.body.appendChild(svg);

    const elements = [...document.querySelectorAll<HTMLElement>(".liquid-glass")];
    const filters = new Map<string, { filter: SVGElement; mapUrl: string }>();
    const failed = new Set<string>();
    let frame = 0;
    let settle: ReturnType<typeof setTimeout> | undefined;
    let building = false;
    let disposed = false;

    const rebuild = () => {
      const used = new Set<string>();
      let pending = false;
      for (const element of elements) {
        const w = element.offsetWidth;
        const h = element.offsetHeight;
        if (w < 2 || h < 2) continue;
        const style = getComputedStyle(element);
        const radius = Math.min(parseFloat(style.borderTopLeftRadius) || 0, w / 2, h / 2);
        const blur = parseFloat(style.getPropertyValue("--glass-blur")) || 0;
        const key = [w, h, radius, blur].join("|");
        used.add(key);
        const entry = filters.get(key);
        if (!entry) {
          if (failed.has(key)) continue;
          // One map at a time keeps every task short. The rest follow in DOM order, and until its map is ready
          // an element keeps what it had: the CSS fallback on first load, its previous filter after a resize.
          pending = true;
          if (building) continue;
          building = true;
          buildFilter(w, h, radius, blur)
            .then(
              (built) => {
                if (disposed) return URL.revokeObjectURL(built.mapUrl);
                svg.appendChild(built.filter);
                filters.set(key, built);
              },
              () => failed.add(key), // no 2D canvas or the map is too large: this element keeps the CSS fallback
            )
            .finally(() => {
              building = false;
              if (!disposed) schedule();
            });
          continue;
        }
        element.style.backdropFilter = `url(#${entry.filter.id})`;
      }
      if (pending) return; // old filters are still referenced by the elements waiting for their new map
      for (const [key, entry] of filters) {
        if (used.has(key)) continue;
        entry.filter.remove();
        URL.revokeObjectURL(entry.mapUrl);
        filters.delete(key);
      }
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(rebuild);
    };
    // A window drag resizes every element on every frame: wait until sizes settle, then rebuild once.
    const onResize = () => {
      clearTimeout(settle);
      settle = setTimeout(schedule, 150);
    };

    const observer = new ResizeObserver(onResize);
    elements.forEach((element) => observer.observe(element));
    schedule();

    return () => {
      disposed = true;
      observer.disconnect();
      clearTimeout(settle);
      cancelAnimationFrame(frame);
      for (const entry of filters.values()) URL.revokeObjectURL(entry.mapUrl);
      elements.forEach((element) => element.style.removeProperty("backdrop-filter"));
      svg.remove();
    };
  }, [pathname]);

  return null;
}
