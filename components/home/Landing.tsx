"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import LogoStrip from "./LogoStrip";
import Logo from "../Logo";

/**
 * Landing hero — "Aperture". The wordmark resolves out of a blur inside a
 * hairline ring, with a single accent dot orbiting the ring as the only
 * continuous motion on the page.
 *
 * Deliberately sparse: name, one line, one small action. The ring is sized
 * well clear of the content so the composition reads as mostly air, which is
 * the whole point of the direction.
 */

export default function Landing() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    // Reduced motion: show the final state, skip the reveal entirely. The
    // orbiting dot is paused in CSS under the same media query.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(root.querySelectorAll("[data-reveal]"), {
        opacity: 1,
        filter: "none",
        scale: 1,
        y: 0,
      });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-reveal='ring']",
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 1.1 }
      )
        .fromTo(
          "[data-reveal='word']",
          { opacity: 0, scale: 0.9, filter: "blur(9px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1 },
          0.15
        )
        .fromTo(
          "[data-reveal='line']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.75
        )
        .fromTo(
          "[data-reveal='cta']",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.92
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={scope} className="section-pad lp-hero">
      {/* The mark sits opposite the nav rail rather than on top of it, so the
          first screen reads corner-to-corner. */}
      <Link href="/" className="ap-logo" aria-label="Klaudio home">
        <Logo size={46} animated />
      </Link>

      <div className="ap-stage">
        <span className="ap-ring" data-reveal="ring" aria-hidden="true">
          <span className="ap-orbit">
            <span className="ap-dot" />
          </span>
        </span>

        <div className="ap-content">
          {/* The wordmark is the visual, but the h1 is what engines read as
              the page's subject, so it carries the full name and category. */}
          <h1 className="ap-word" data-reveal="word">
            Klaudio
            <span className="sr-only">
              {" "}
              LLC, ecommerce technology and AI consulting firm
            </span>
          </h1>

          <p className="ap-line" data-reveal="line">
            The tech behind stores that scale.
          </p>

          <Link href="/contact" className="ap-cta" data-reveal="cta">
            Book a meeting
          </Link>
        </div>
      </div>

      <LogoStrip />
    </section>
  );
}
