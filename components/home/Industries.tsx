"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { industries } from "./data";

const DURATION = 560;
const SWIPE_THRESHOLD = 45;

export default function Industries() {
  const [index, setIndex] = useState(0);
  // The slide being pushed out, plus the direction of travel (1 = next, -1 = prev).
  const [outgoing, setOutgoing] = useState<{ from: number; dir: number } | null>(
    null,
  );
  const touch = useRef<{ x: number; y: number } | null>(null);
  const count = industries.length;

  const goTo = (to: number, dir: number) => {
    if (to === index || outgoing) return;
    setOutgoing({ from: index, dir });
    setIndex(to);
  };

  const step = (dir: number) => goTo((index + dir + count) % count, dir);

  // Safety net: animationend is reliable, but if the tab is backgrounded mid-push
  // it may never fire, which would otherwise leave the slider locked.
  useEffect(() => {
    if (!outgoing) return;
    const t = window.setTimeout(() => setOutgoing(null), DURATION + 120);
    return () => window.clearTimeout(t);
  }, [outgoing]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Ignore mostly-vertical drags so the page can still scroll through the card.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  };

  const slideStyle = (i: number): React.CSSProperties => {
    const isCurrent = i === index;
    const isOutgoing = outgoing?.from === i;
    if (!isCurrent && !isOutgoing) return { opacity: 0, visibility: "hidden" };
    if (!outgoing) return { zIndex: 2 };

    const offscreen = `${outgoing.dir * 100}%`;
    return {
      zIndex: isOutgoing ? 1 : 2,
      animation: `${isOutgoing ? "industry-exit" : "industry-enter"} ${DURATION}ms cubic-bezier(.65,.05,.25,1) both`,
      ...(isOutgoing
        ? { ["--x-to" as string]: `-${offscreen}` }
        : { ["--x-from" as string]: offscreen }),
    } as React.CSSProperties;
  };

  return (
    <section
      id="industries"
      className="section-pad"
      style={{
        background: "#ffffff",
        padding: "40px 64px 80px",
        overflow: "hidden",
        borderTop: "1px solid #eef1f5",
      }}
    >
      <header style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-quicksand)",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          Industries
        </div>
        <h2
          className="industries-title"
          style={{
            margin: "0 0 16px",
            fontSize: 36,
            lineHeight: 1.12,
            fontWeight: 400,
            letterSpacing: "-.025em",
            color: "#0f1a2e",
            textWrap: "pretty",
          }}
        >
          Built for the industries you operate in
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#586074",
            textWrap: "pretty",
          }}
        >
          From regulated enterprises to fast‑moving startups, we tailor every
          engagement to the realities of your sector.
        </p>
      </header>

      <div
        className="industries-slider"
        role="group"
        aria-roledescription="carousel"
        aria-label="Industries we serve"
      >
        <button
          type="button"
          aria-label="Previous industry"
          onClick={() => step(-1)}
          className="industries-arrow industries-arrow--prev"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="industries-viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {industries.map((it, i) => (
            <div
              key={it.name}
              className="industry-slide"
              aria-hidden={i !== index}
              onAnimationEnd={() => {
                if (i === index) setOutgoing(null);
              }}
              style={slideStyle(i)}
            >
              <Image
                src={it.img}
                alt={it.name}
                fill
                sizes="(max-width: 860px) 100vw, 520px"
                style={{ objectFit: "cover" }}
                priority={i === 0}
                draggable={false}
              />
              <div className="industry-caption">
                <span
                  style={{
                    fontFamily: "var(--font-quicksand)",
                    color: "#fff",
                    opacity: 0.7,
                    fontSize: 12,
                    letterSpacing: ".1em",
                  }}
                >
                  {"#" + String(i + 1).padStart(2, "0")}
                </span>
                <div className="industry-caption-name">{it.name}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next industry"
          onClick={() => step(1)}
          className="industries-arrow industries-arrow--next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="industries-dots">
        {industries.map((it, i) => (
          <button
            key={it.name}
            type="button"
            aria-label={`Go to ${it.name}`}
            aria-current={i === index}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className="industries-dot"
          >
            <span className={i === index ? "is-active" : undefined} />
          </button>
        ))}
      </div>
    </section>
  );
}
