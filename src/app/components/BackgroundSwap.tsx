"use client";

import { useEffect } from "react";

// Files in public/background/. The first one is the image the page loads with (--bg-image in globals.css).
const IMAGES = ["background", "background-2", "background-3", "background-4", "background-5"];

/**
 * Each time the reader reaches the end of the contact section, cross-fades the page background to a
 * different random image. The fade itself (1s, off under reduced motion) lives in globals.css.
 */
export default function BackgroundSwap() {
  useEffect(() => {
    // The last element of the contact card: once it is fully on screen the whole section has been reached, on any screen height.
    const end = document.querySelector(".contact-email");
    if (!end) return;
    const body = document.body;
    let current = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Pick among the other images, so the background always changes.
        let next = Math.floor(Math.random() * (IMAGES.length - 1));
        if (next >= current) next++;
        current = next;
        const url = `/background/${IMAGES[next]}.svg`;
        // Load before fading, so the fade never reveals an empty layer. If the file cannot be loaded, keep what is showing.
        const image = new Image();
        image.src = url;
        image.decode().then(
          () => {
            const showB = body.dataset.bg !== "b";
            body.style.setProperty(showB ? "--bg-image-b" : "--bg-image", `url("${url}")`);
            body.dataset.bg = showB ? "b" : "a";
          },
          () => {},
        );
      },
      { threshold: 1 },
    );
    observer.observe(end);
    return () => observer.disconnect();
  }, []);

  return null;
}
