"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which nav item should show the accent dot.
 *
 * Starts from `initial` (the page's own href), updates immediately on click,
 * and — on pages that contain the home sections — follows the section
 * currently in view via IntersectionObserver so the dot tracks scrolling too.
 */
export function useActiveNav(initial: string) {
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const ids = ["services", "industries", "process", "about"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return; // not on the home page — route-based active only

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      // A band around the middle of the viewport decides the active section.
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return [active, setActive] as const;
}
