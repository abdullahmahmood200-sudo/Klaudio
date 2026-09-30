"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { getLenis, setLenis } from "./lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Site-wide scroll effects, mounted once in the root layout.
 *
 * 1. Lenis smooth scrolling — deliberately slow/heavy (duration 1.9) — wired
 *    into GSAP's ticker so ScrollTrigger stays in sync with the virtual scroll.
 * 2. A fade-in + slide-up reveal for every section (and the case-studies cube
 *    shell / footer), re-run on each route change so navigating to a page
 *    plays the same entrance as scrolling down to it.
 */
export default function ScrollFX() {
  const pathname = usePathname();

  // Lenis smooth scroll, created once for the app's lifetime.
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true, // in-page #links glide instead of jumping
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    // Published so components can drive a scroll without owning the instance.
    setLenis(lenis);

    return () => {
      gsap.ticker.remove(raf);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  // Reset the scroll on navigation. Next scrolls the window to the top itself,
  // but Lenis keeps its own target position and writes that stale value back on
  // the next rAF tick, so following a footer link landed you on the footer of
  // the new page. This runs before the reveal effect below so ScrollTrigger
  // measures from the top.
  useEffect(() => {
    // A hash link is asking for a specific section, so leave it to Lenis's
    // own anchor handling rather than yanking the page to the top.
    if (window.location.hash) return;
    getLenis()?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  // Reveal animations, rebuilt per route so new pages animate in too.
  useEffect(() => {
    // The landing hero is excluded: it choreographs its own entrance, and the
    // y-tween here would put a transform on it for two seconds. That makes it
    // the containing block for its own `position: fixed` children — the corner
    // mark — which then rides the tween up instead of staying pinned.
    // The legal pages (Terms, Privacy) and the Insights index are built from
    // articles/lists rather than <section>s, so their blocks are listed
    // explicitly. The privacy callout sits inside .legal-layout, which already
    // reveals, so it is skipped to avoid animating twice.
    const targets = gsap.utils.toArray<HTMLElement>(
      "section:not(.lp-hero):not(.legal-callout), .cube-shell, footer, " +
        ".legal-hero, .legal-layout, .insights-hero, .insights-list > li"
    );
    const tweens = targets.map((el) =>
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 72 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          // Clear inline transform/opacity afterwards so sticky/fixed children
          // and 3D perspectives inside sections behave normally again.
          clearProps: "transform,opacity,visibility",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      )
    );
    ScrollTrigger.refresh();

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, [pathname]);

  return null;
}
