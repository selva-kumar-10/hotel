"use client";

import { useEffect, useState } from "react";

/**
 * True while the user is scrolling down past `minY`; flips back to false as
 * soon as they scroll up (or return near the top). Used to tuck the header
 * away so it never covers the content being read.
 */
export function useScrollHidden(minY = 120, sensitivity = 6): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      if (y < minY) {
        setHidden(false);
        lastY = y;
      } else if (delta > sensitivity) {
        setHidden(true);
        lastY = y;
      } else if (delta < -sensitivity) {
        setHidden(false);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [minY, sensitivity]);

  return hidden;
}
