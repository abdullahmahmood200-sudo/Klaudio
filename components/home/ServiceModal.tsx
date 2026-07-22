"use client";

import { useEffect } from "react";
import type { Service } from "./data";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 28,
        background: "rgba(238,241,245,.55)",
        backdropFilter: "var(--blur)",
        WebkitBackdropFilter: "var(--blur)",
        animation: "fadeIn .2s ease",
      }}
    >
      <div
        className="service-modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: 840,
          maxWidth: "94vw",
          background: "#ffffff",
          border: "1px solid #e6eaf1",
          borderRadius: 26,
          boxShadow: "0 44px 100px -34px rgba(15,26,46,.5)",
          display: "flex",
          overflow: "hidden",
          animation: "modalIn .34s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        <div
          className="sm-media"
          style={{
            flex: "0 0 44%",
            minHeight: 380,
            background:
              "repeating-linear-gradient(45deg,#eef1f6 0,#eef1f6 11px,#e4e9f1 11px,#e4e9f1 22px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-quicksand)",
              fontSize: 10,
              letterSpacing: ".09em",
              color: "#9aa4b5",
              background: "rgba(255,255,255,.75)",
              padding: "4px 9px",
              borderRadius: 6,
              textTransform: "uppercase",
            }}
          >
            illustration
          </span>
        </div>
        <div
          className="sm-body"
          style={{
            flex: 1,
            padding: "46px 46px 40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="sm-eyebrow"
            style={{
              fontFamily: "var(--font-quicksand)",
              fontSize: 11,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            Service
          </div>
          <h2
            className="sm-title"
            style={{
              margin: "0 0 16px",
              fontSize: 36,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-.02em",
              color: "#0f1a2e",
            }}
          >
            {service.title}
          </h2>
          <p
            className="sm-blurb"
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.62,
              color: "#586074",
              textWrap: "pretty",
            }}
          >
            {service.blurb}
          </p>
          <div style={{ flex: 1 }} />
          <a
            href="#"
            className="sm-link"
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: 30,
              fontSize: 15,
              fontWeight: 400,
              color: "var(--accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Take a look <span style={{ fontSize: 17 }}>→</span>
          </a>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1px solid #e6eaf1",
            background: "#fff",
            color: "#586074",
            fontSize: 18,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
