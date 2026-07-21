"use client";

import { useState } from "react";
import { services } from "./data";
import ServiceModal from "./ServiceModal";

export default function Hero() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section
        id="services"
        className="section-pad"
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          padding: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <header style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              fontFamily: "var(--font-quicksand)",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 18,
            }}
          >
            What we build
          </div>
          <h1
            style={{
              margin: "0 auto",
              maxWidth: 640,
              fontSize: 36,
              lineHeight: 1.12,
              fontWeight: 400,
              letterSpacing: "-.025em",
              color: "#0f1a2e",
              textWrap: "pretty",
            }}
          >
            Technology that moves your{" "}
            <span style={{ color: "var(--accent)" }}>business forward</span>
          </h1>
        </header>

        <div
          className="service-cards"
          style={{ display: "flex", gap: 14, height: 378 }}
        >
          {services.map((card, i) => (
            <div
              key={card.title}
              className="service-card"
              onClick={() => setSelected(i)}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#3a4459",
                  letterSpacing: ".01em",
                  lineHeight: 1.25,
                }}
              >
                {card.title}
              </span>
              <div
                style={{
                  marginTop: 16,
                  flex: 1,
                  borderRadius: 12,
                  background:
                    "repeating-linear-gradient(45deg,#eef1f6 0,#eef1f6 9px,#e4e9f1 9px,#e4e9f1 18px)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-quicksand)",
                    fontSize: 9.5,
                    letterSpacing: ".09em",
                    color: "#9aa4b5",
                    background: "rgba(255,255,255,.72)",
                    padding: "3px 7px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                  }}
                >
                  illustration
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServiceModal
        service={selected !== null ? services[selected] : null}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
