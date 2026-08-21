"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { processSteps } from "./data";

export default function Process() {
  const procRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const contRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [p, setP] = useState(0);
  const [maxShift, setMaxShift] = useState(0);

  const updateProgress = useCallback(() => {
    const sec = procRef.current;
    const track = trackRef.current;
    const cont = contRef.current;
    if (!sec || !track || !cont) return;
    const total = sec.offsetHeight - window.innerHeight;
    const np =
      total > 0
        ? Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / total))
        : 0;
    const nMaxShift = Math.max(0, track.scrollWidth - cont.clientWidth);
    setP((prev) => (prev !== np ? np : prev));
    setMaxShift((prev) => (prev !== nMaxShift ? nMaxShift : prev));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateProgress();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateProgress]);

  const trackTf = `translateX(${(-p * maxShift).toFixed(1)}px)`;
  const cardY = (i: number) => {
    const base = i % 2 === 0 ? -34 : 34;
    return (base + Math.sin(p * Math.PI * 3 + i * 0.8) * 20).toFixed(1);
  };

  return (
    <section
      id="process"
      ref={procRef}
      style={{
        position: "relative",
        height: "270vh",
        background: "#ffffff",
        borderTop: "1px solid #eef1f5",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px",
        }}
      >
        <header style={{ maxWidth: 600, margin: "0 auto 12px", textAlign: "center" }}>
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
            Process
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.12,
              fontWeight: 400,
              letterSpacing: "-.025em",
              color: "#0f1a2e",
              textWrap: "pretty",
            }}
          >
            A clear process, start to finish
          </h2>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: 15,
              fontWeight: 300,
              color: "#586074",
            }}
          >
            Scroll to move through every step of how we work.
          </p>
        </header>
        <div ref={contRef} style={{ width: "100%" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: 28,
              transform: trackTf,
              willChange: "transform",
              padding: "60px 0",
            }}
          >
            {processSteps.map((s, i) => (
              <div
                key={s.num}
                style={{
                  flex: "0 0 auto",
                  transition: "transform .1s linear",
                  transform: `translateY(${cardY(i)}px)`,
                }}
              >
                <div
                  style={{
                    width: 236,
                    height: 300,
                    borderRadius: 20,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#ffffff",
                    color: "#0f1a2e",
                    border: "2px solid var(--accent)",
                    boxShadow: "0 18px 40px -24px rgba(26,75,255,.35)",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "flex-start",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#0f1a2e",
                      letterSpacing: ".02em",
                    }}
                  >
                    {s.num}
                  </span>
                  <div>
                    <span
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "block",
                        marginBottom: 14,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 19,
                        fontWeight: 400,
                        lineHeight: 1.25,
                        letterSpacing: "-.01em",
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        fontWeight: 300,
                        lineHeight: 1.5,
                        marginTop: 8,
                        color: "#586074",
                      }}
                    >
                      {s.body}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
