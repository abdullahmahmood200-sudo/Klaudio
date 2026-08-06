"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setLenis } from "./lenis";

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

  // Reveal animations, rebuilt per route so new pages animate in too.
  useEffect(() => {
    const targets = gsap.utils.toArray<HTMLElement>(
      "section, .cube-shell, footer"
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
