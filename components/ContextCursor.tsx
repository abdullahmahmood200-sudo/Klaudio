"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Contextual label cursor — a small accent dot glides after the real cursor
 * (GSAP trailing lag). Over meaningful zones it blooms into a pill with a
 * verb describing the interaction: "View" on service cards, "Drag" on the
 * sliders / cube stage, "Rotate" on the case list, "Send" on submit, "Open"
 * on route links. Generic links just grow the dot slightly.
 *
 * Desktop pointers only; the native cursor stays visible underneath.
 */

// First match wins, so put the most specific zones on top.
const zones: { sel: string; label: string }[] = [
  { sel: ".footer-wordmark", label: "Top" },
  { sel: ".service-card", label: "View" },
  { sel: ".submit-btn", label: "Send" },
  { sel: "input[type='range']", label: "Drag" },
  { sel: ".cube-aside nav > div", label: "Rotate" },
  { sel: ".cube-stage", label: "Drag" },
  { sel: "a[href^='/case-studies'], a[href^='/contact']", label: "Open" },
];

const genericInteractive =
  "a, button, [role='button'], input, select, textarea, label";

// Accent-filled and ink-filled surfaces. The dot is var(--accent), so over
// these it would be invisible — it flips to white instead.
// The footer's CTA band is a full-bleed accent panel and the closing wordmark
// is accent-filled type, so both need the inverted dot too.
const darkSurfaces =
  ".ap-cta, .cta-btn, .submit-btn, .mm-popup, .svc-faq[data-open] .svc-faq-icon, .footer-cta, .footer-wordmark";

export default function ContextCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const pill = pillRef.current;
    if (!el || !pill) return;

    // The dot IS the cursor (native one is hidden), so keep the lag short —
    // just enough to feel fluid without disconnecting from the real pointer.
    const xTo = gsap.quickTo(el, "x", { duration: 0.22, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.22, ease: "power3.out" });
    let visible = false;

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        // First movement: appear in place instead of flying in from 0,0.
        gsap.set(el, { x: e.clientX, y: e.clientY });
        gsap.to(el, { autoAlpha: 1, duration: 0.3 });
        visible = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as Element | null;
      const zone = zones.find((z) => target?.closest?.(z.sel));
      if (zone) pill.textContent = zone.label;
      el.classList.toggle("has-label", !!zone);
      el.classList.toggle(
        "is-link",
        !zone && !!target?.closest?.(genericInteractive)
      );
      el.classList.toggle("on-dark", !!target?.closest?.(darkSurfaces));
    };

    const onLeave = () => {
      gsap.to(el, { autoAlpha: 0, duration: 0.25 });
      visible = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="ctx-cursor" aria-hidden="true">
      <span className="cc-dot" />
      <span ref={pillRef} className="cc-pill" />
    </div>
  );
}
