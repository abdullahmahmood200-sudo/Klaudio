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
            Services
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
            Built
            <br />
            <span style={{ color: "var(--accent)" }}>Different</span>
          </h1>
        </header>

        {/* Layout lives in CSS (.service-cards) so the mobile tile grid can
            override it — inline styles would win over the media query. */}
        <div className="service-cards">
          {services.map((card, i) => (
            <div
              key={card.title}
              className="service-card"
              onClick={() => setSelected(i)}
            >
              <span className="service-card-title">{card.title}</span>
              <div
                style={{
                  marginTop: 16,
                  flex: 1,
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "#e4e9f1",
                }}
              >
                {/* Absolute fill + cover: the image just reveals more of
                    itself as the card's flex-grow animates — no stretching. */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="service-card-img"
                  draggable={false}
                />
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
