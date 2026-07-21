"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "./data";

export default function Industries() {
  const [center, setCenter] = useState(3.5);
  const maxCenter = industries.length - 1;
  const step = 18;
  const R = 360;

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
        className="industries-stage"
        style={{
          perspective: "1200px",
          height: 432,
          position: "relative",
          marginTop: 30,
        }}
      >
        <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
          {industries.map((it, i) => {
            const d = i - center;
            const ad = Math.abs(d);
            const rad = (d * step * Math.PI) / 180;
            const tx = R * Math.sin(rad);
            const tz = R * (1 - Math.cos(rad));
            const rotY = -d * step;
            const scale = 1 + Math.min(ad, 3) * 0.05;
            const opacity = ad > 2.6 ? 0 : ad > 1.8 ? (2.6 - ad) / 0.8 : 1;
            const capOpacity = ad > 1.5 ? 0 : 1;
            const zi = Math.round(100 - ad * 10);
            const pe = ad > 2.6 ? "none" : "auto";
            const num = "#" + String(i + 1).padStart(2, "0");
            return (
              <div
                key={it.name}
                onClick={() => setCenter(i)}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 22,
                  width: 196,
                  marginLeft: -98,
                  transformStyle: "preserve-3d",
                  transition:
                    "transform .55s cubic-bezier(.22,.61,.36,1),opacity .4s ease",
                  transform: `translateX(${tx.toFixed(1)}px) translateZ(${tz.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(3)})`,
                  opacity: Number(opacity.toFixed(2)),
                  zIndex: zi,
                  pointerEvents: pe as React.CSSProperties["pointerEvents"],
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 296,
                    borderRadius: 16,
                    overflow: "hidden",
                    cursor: "pointer",
                    boxShadow: "0 22px 44px -18px rgba(15,26,46,.45)",
                    background: "#e7ebf1",
                  }}
                >
                  <Image
                    src={it.img}
                    alt={it.name}
                    fill
                    sizes="196px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 14,
                    opacity: capOpacity,
                    transition: "opacity .3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-quicksand)",
                      color: "var(--accent)",
                      fontSize: 12,
                      letterSpacing: ".1em",
                    }}
                  >
                    {num}
                  </span>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: "#0f1a2e",
                      marginTop: 5,
                    }}
                  >
                    {it.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 420, margin: "8px auto 0" }}>
        <input
          type="range"
          className="om-slider"
          min={0}
          max={maxCenter}
          step={0.02}
          value={center}
          onChange={(e) => setCenter(parseFloat(e.target.value))}
        />
      </div>
    </section>
  );
}
