"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the middle of the
 * viewport. `ids` must be a stable reference (module constant). Pass the
 * current route as `resetKey` so the observer re-attaches after navigation.
 */
export function useActiveSection(
  ids: readonly string[],
  resetKey: string = "",
): string {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // Thin band around the vertical centre of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, resetKey]);

  return active;
}
