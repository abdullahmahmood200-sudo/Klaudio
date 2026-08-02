"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

type Study = { name: string; category: string; img: string };

const data: Study[] = [
  { name: "Erikna", category: "Real Estate", img: "/Erikna%20Real%20Estate.avif" },
  { name: "Forge Manufacturing", category: "Manufacturing", img: "/Forge%20Manufacturing%20(Manufacturing).avif" },
  { name: "Harbor Realty", category: "Real Estate", img: "/Harbor%20Realty%20Real%20Estate.avif" },
  { name: "Lumen Learning", category: "Education", img: "/Lumen%20Learning.avif" },
  { name: "Solace Health", category: "Healthcare", img: "/Solace%20Health%20(Healthcare).avif" },
  { name: "Vantage Insurance", category: "Financial Services", img: "/Vantage%20Insurance%20(Financial%20Services).avif" },
];

// base transform per cube face, and the cube rotation that brings each to front
const faceBase = [
  "translateZ(150px)",
  "rotateY(90deg) translateZ(150px)",
  "rotateY(180deg) translateZ(150px)",
  "rotateY(-90deg) translateZ(150px)",
  "rotateX(90deg) translateZ(150px)",
  "rotateX(-90deg) translateZ(150px)",
];
// Canonical orientation that brings each face to the front. The faces above
// are laid out as a continuous ring — front → right → back → left → top →
// bottom — so stepping through the studies rolls the cube a quarter-turn each.
const canonical = [
  { rx: 0, ry: 0 }, // front
  { rx: 0, ry: -90 }, // right
  { rx: 0, ry: -180 }, // back
  { rx: 0, ry: -270 }, // left
  { rx: -90, ry: 0 }, // top
  { rx: 90, ry: 0 }, // bottom
];

// Return the value equivalent to `target` (mod 360) that is nearest to
// `current`, so the cube always rolls the shortest way instead of unwinding
// the long way around (e.g. front → back rolls 180°, never spins 270°).
function nearestEquivalent(current: number, target: number): number {
  return target + 360 * Math.round((current - target) / 360);
}

const menuLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
];

export default function CaseStudiesPage() {
  const [sel, setSel] = useState(0);
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);
  // Finger/mouse drag on the cube itself. While dragging we track the raw
  // rotation and disable the snap transition; on release we snap to the
  // nearest face and sync the selection in the list.
  const [dragging, setDragging] = useState(false);
  // Pointer-drag bookkeeping: where the drag started and the live rotation,
  // mirrored here so endDrag can snap without stale-state gymnastics.
  const drag = useRef<{ x: number; y: number; startRx: number; startRy: number; rx: number; ry: number } | null>(null);

  const deg = ((Math.round(ry) % 360) + 360) % 360;

  function endDrag() {
    if (!drag.current) return;
    const { rx: curRx, ry: curRy } = drag.current;
    drag.current = null;
    setDragging(false);
    // Snap to the nearest face. rx is clamped to [-90, 90] during the drag,
    // so it lands on -90 (top), 0 (ring of side faces) or 90 (bottom).
    const snapRx = Math.round(curRx / 90) * 90;
    const snapRy = Math.round(curRy / 90) * 90;
    setRx(snapRx);
    setRy(snapRy);
    // Which face ends up at front: the side ring obeys face i ⇔ ry ≡ -90·i;
    // tipped up/down it's the top (4) or bottom (5) face regardless of ry.
    setSel(snapRx === 0 ? ((-snapRy / 90) % 4 + 4) % 4 : snapRx < 0 ? 4 : 5);
  }

  return (
    <div style={{ background: "#f5f7fa" }}>
      {/* Mobile-only floating menu; the right sidebar below is hidden on mobile */}
      <MobileMenu home={false} activeHref="/case-studies" />

      <div
        className="cube-shell"
        style={{
          display: "flex",
          height: "100vh",
          minHeight: 640,
          background: "linear-gradient(160deg,#f7f9fc 0%,#eef1f6 55%,#e7ebf2 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left sidebar — case list */}
        <aside
          className="cube-aside"
          style={{
            flex: "0 0 236px",
            padding: "34px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 30,
            zIndex: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, position: "relative" }}>
              <div style={{ position: "absolute", width: 16, height: 16, background: "#0f1a2e", transform: "rotate(45deg)", top: 0, left: 7, borderRadius: 3 }} />
              <div style={{ position: "absolute", width: 16, height: 16, background: "var(--accent)", transform: "rotate(45deg)", top: 8, left: 7, borderRadius: 3, opacity: 0.9 }} />
            </div>
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em" }}>Nyxo</span>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-quicksand)",
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#8b93a3",
                marginBottom: 14,
                paddingLeft: 4,
              }}
            >
              Case Studies
            </div>
            <nav className="cube-list" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {data.map((s, i) => {
                const active = i === sel;
                return (
                  <div
                    key={s.name}
                    className="cube-item"
                    data-active={active || undefined}
                    onClick={(e) => {
                      // On mobile the list is a horizontal chip bar — slide the
                      // tapped chip into view. block:"nearest" prevents any
                      // vertical page jump on desktop.
                      e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                      setSel(i);
                      setRx((prev) => nearestEquivalent(prev, canonical[i].rx));
                      setRy((prev) => nearestEquivalent(prev, canonical[i].ry));
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      padding: "11px 13px",
                      borderRadius: 12,
                      cursor: "pointer",
                      transition: "background .25s ease",
                      background: active ? "#0f1a2e" : "transparent",
                    }}
                  >
                    <span
                      className="cube-item-diamond"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        border: `2px solid ${active ? "#ffffff" : "var(--accent)"}`,
                        transform: "rotate(45deg)",
                        flex: "0 0 auto",
                      }}
                    />
                    <span style={{ minWidth: 0 }}>
                      <span
                        className="cube-item-name"
                        style={{
                          display: "block",
                          fontSize: 14,
                          fontWeight: active ? 500 : 400,
                          letterSpacing: "-.005em",
                          lineHeight: 1.2,
                          color: active ? "#ffffff" : "#0f1a2e",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {s.name}
                      </span>
                      <span
                        className="cube-item-cat"
                        style={{
                          display: "block",
                          fontSize: 11,
                          fontWeight: 300,
                          marginTop: 2,
                          color: active ? "rgba(255,255,255,.6)" : "#9aa3b2",
                        }}
                      >
                        {s.category}
                      </span>
                    </span>
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Center stage — cube */}
        <main
          className="cube-stage"
          style={{
            flex: 1,
            minWidth: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="cube-scale"
            style={{
              perspective: "1400px",
              perspectiveOrigin: "50% 42%",
              touchAction: "none", // finger drags rotate the cube, not the page
              cursor: dragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              drag.current = { x: e.clientX, y: e.clientY, startRx: rx, startRy: ry, rx, ry };
              setDragging(true);
            }}
            onPointerMove={(e) => {
              if (!drag.current) return;
              const d = drag.current;
              // ~0.4°/px feels right at this cube size; rx is clamped so the
              // cube can tip to the top/bottom face but never somersault.
              d.ry = d.startRy + (e.clientX - d.x) * 0.4;
              d.rx = Math.max(-90, Math.min(90, d.startRx - (e.clientY - d.y) * 0.4));
              setRx(d.rx);
              setRy(d.ry);
            }}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onDragStart={(e) => e.preventDefault()}
          >
            <div
              style={{
                width: 300,
                height: 300,
                position: "relative",
                transformStyle: "preserve-3d",
                transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
                transition: dragging ? "none" : "transform .9s cubic-bezier(.65,.05,.2,1)",
              }}
            >
              {data.map((f, i) => (
                <div
                  key={f.name}
                  style={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    borderRadius: 6,
                    background: "#e7ebf1",
                    transform: faceBase[i],
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.14)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover", filter: "saturate(.9)" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg,rgba(15,26,46,0) 45%,rgba(15,26,46,.72) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: 18,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-quicksand)",
                        fontSize: 11,
                        letterSpacing: ".14em",
                        color: "rgba(255,255,255,.7)",
                        textTransform: "uppercase",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")} · {f.category}
                    </span>
                    <span
                      style={{
                        fontSize: 19,
                        fontWeight: 500,
                        color: "#fff",
                        letterSpacing: "-.01em",
                        marginTop: 3,
                      }}
                    >
                      {f.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: 340,
              height: 70,
              marginTop: 6,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center,rgba(15,26,46,.16) 0%,rgba(15,26,46,0) 68%)",
              filter: "blur(3px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 38,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ width: 300, maxWidth: "60vw" }}>
              <input
                type="range"
                className="cube-slider"
                min={0}
                max={359}
                step={1}
                value={deg}
                onChange={(e) => {
                  const v = parseInt(e.target.value, 10);
                  setRy((prev) => nearestEquivalent(prev, v));
                  setRx((prev) => nearestEquivalent(prev, 0));
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-quicksand)",
                  fontSize: 11,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "#8b93a3",
                }}
              >
                Rotation
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 300,
                  letterSpacing: ".02em",
                  color: "#0f1a2e",
                  marginTop: 2,
                }}
              >
                {deg}°
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 40,
              fontFamily: "var(--font-quicksand)",
              fontSize: 11,
              color: "#9aa3b2",
              letterSpacing: ".06em",
            }}
          >
            <span style={{ color: "#c2c9d5" }}>x</span>{" "}
            <span style={{ color: "#0f1a2e", fontWeight: 500 }}>y</span>{" "}
            <span style={{ color: "#c2c9d5" }}>z</span>
          </div>
        </main>

        {/* Right sidebar — secondary nav (desktop only; mobile uses MobileMenu) */}
        <aside
          className="cube-aside cube-aside-menu"
          style={{
            flex: "0 0 236px",
            padding: "34px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 26,
            zIndex: 5,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-quicksand)",
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#8b93a3",
                marginBottom: 16,
              }}
            >
              Menu
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {menuLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{ fontSize: 14, fontWeight: 400, color: "#7b8494", paddingLeft: 15 }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0f1a2e",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                Case Studies
              </a>
              <Link href="/#about" style={{ fontSize: 14, fontWeight: 400, color: "#7b8494", paddingLeft: 15 }}>
                About Us
              </Link>
              {/* Bug fix: source pointed to Services Hero.dc.html#contact (no such
                  anchor). Contact is its own route in this app. */}
              <Link href="/contact" style={{ fontSize: 14, fontWeight: 400, color: "#7b8494", paddingLeft: 15 }}>
                Contact
              </Link>
            </nav>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
