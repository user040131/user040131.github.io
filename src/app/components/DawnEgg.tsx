"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const APPEAR_AFTER = 1000; // ms after the page loads
const VISIBLE_FOR = 30000; // ms on screen, fades included
const SPEED = 77; // px per second, constant
const STORAGE_KEY = "dawn-egg-day";

// 01:00 to 05:59 in the visitor's local time.
function isDawn(hour: number) {
  return hour >= 1 && hour <= 5;
}

// One axis of the motion: move, and mirror off either wall. Returns the new position and velocity.
function bounce(pos: number, velocity: number, max: number): [number, number] {
  if (pos < 0) return [Math.min(-pos, max), Math.abs(velocity)];
  if (pos > max) return [Math.max(2 * max - pos, 0), -Math.abs(velocity)];
  return [pos, velocity];
}

if (process.env.NODE_ENV !== "production") {
  console.assert(!isDawn(0) && isDawn(1) && isDawn(5) && !isDawn(6), "dawn egg hours");
  console.assert(String(bounce(-3, -5, 100)) === "3,5" && String(bounce(104, 5, 100)) === "96,-5" && String(bounce(50, 5, 100)) === "50,5", "dawn egg bounce");
}

/**
 * Easter egg. Between 01:00 and 05:59 local time, once per day, a small note drifts across the screen
 * for thirty seconds, fading in and out: the time it appeared, and a line of text. It sits under the page content and never takes a click.
 */
export default function DawnEgg({ message }: { message: string }) {
  const [shownAt, setShownAt] = useState<string | null>(null);
  const note = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hide: ReturnType<typeof setTimeout> | undefined;
    const show = setTimeout(() => {
      const now = new Date();
      if (!isDawn(now.getHours())) return;
      const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`; // local calendar day
      try {
        if (localStorage.getItem(STORAGE_KEY) === today) return;
        localStorage.setItem(STORAGE_KEY, today);
      } catch {
        return; // storage blocked: "once a day" cannot be kept, so stay hidden
      }
      setShownAt(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`);
      hide = setTimeout(() => setShownAt(null), VISIBLE_FOR);
    }, APPEAR_AFTER);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  // Layout effect: the note is placed before its first paint, so it never flashes in the corner.
  useLayoutEffect(() => {
    const el = note.current;
    if (!el) return;
    const root = document.documentElement;
    // Read on every frame: the window can be resized or rotated while the note is out.
    const maxX = () => Math.max(root.clientWidth - el.offsetWidth, 0);
    const maxY = () => Math.max(root.clientHeight - el.offsetHeight, 0);
    let x = Math.random() * maxX();
    let y = Math.random() * maxY();
    // 30 to 60 degrees off the axes, in a random quadrant, so it visibly travels both ways.
    const angle = ((30 + Math.random() * 30) * Math.PI) / 180;
    let vx = SPEED * Math.cos(angle) * (Math.random() < 0.5 ? -1 : 1);
    let vy = SPEED * Math.sin(angle) * (Math.random() < 0.5 ? -1 : 1);
    const place = () => {
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    place();
    // Reduced motion: the note still appears, but stays where it landed.
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = performance.now();
    let frame = requestAnimationFrame(function step(time) {
      const dt = Math.min((time - last) / 1000, 0.1); // a background tab resumes without a jump
      last = time;
      [x, vx] = bounce(x + vx * dt, vx, maxX());
      [y, vy] = bounce(y + vy * dt, vy, maxY());
      place();
      frame = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(frame);
  }, [shownAt]);

  if (!shownAt) return null;
  return (
    // The fade is one CSS animation as long as the note's life (globals.css), so it ends exactly when the note is removed.
    <div className="dawn-egg" ref={note} aria-hidden="true" style={{ animationDuration: `${VISIBLE_FOR}ms` }}>
      <strong>{shownAt}</strong>
      {message}
    </div>
  );
}
