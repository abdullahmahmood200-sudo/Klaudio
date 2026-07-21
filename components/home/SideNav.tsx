"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { navItems } from "./data";
import MobileMenu from "@/components/MobileMenu";

export default function SideNav() {
  const navRef = useRef<HTMLElement>(null);
  const [navHover, setNavHover] = useState<number | null>(null);

  const onNavMove = (e: React.MouseEvent) => {
    const nav = navRef.current;
    if (!nav) return;
    const y = e.clientY;
    let best = 0;
    let bestD = Infinity;
    Array.from(nav.children).forEach((ch, i) => {
      const r = (ch as HTMLElement).getBoundingClientRect();
      const mid = r.top + r.height / 2;
      const d = Math.abs(y - mid);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    if (best !== navHover) setNavHover(best);
  };

  return (
    <aside
      className="sidebar"
      style={{
        flex: "0 0 184px",
        background: "#ffffff",
        borderRight: "1px solid #e6eaf1",
        padding: "26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        position: "sticky",
        top: 0,
        height: "100vh",
      }}
    >
      {/* Logo. On mobile the floating MobileMenu below provides the nav popup. */}
      <div className="sidebar-bar" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, position: "relative" }}>
          <div style={{ position: "absolute", width: 17, height: 17, background: "#0f1a2e", transform: "rotate(45deg)", top: 0, left: 7, borderRadius: 3 }} />
          <div style={{ position: "absolute", width: 17, height: 17, background: "var(--accent)", transform: "rotate(45deg)", top: 8, left: 7, borderRadius: 3, opacity: 0.9 }} />
        </div>
      </div>

      <MobileMenu home activeHref="#services" />

      <nav
        ref={navRef}
        onMouseMove={onNavMove}
        onMouseLeave={() => setNavHover(null)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          perspective: "620px",
          transformStyle: "preserve-3d",
        }}
      >
        {navItems.map((it, i) => {
          const active = !!it.active;
          const nh = navHover;
          let rotX = 0;
          let tz = 0;
          let sc = 1;
          let op = 1;
          if (nh !== null) {
            const d = i - nh;
            const ad = Math.abs(d);
            rotX = Math.max(-34, Math.min(34, d * 15));
            tz = ad === 0 ? 14 : -ad * 5;
            sc = ad === 0 ? 1.1 : Math.max(0.93, 1 - ad * 0.025);
            op = ad === 0 ? 1 : Math.max(0.72, 1 - ad * 0.09);
          }
          const isHover = nh === i;
          const strong = active || isHover;
          const style: React.CSSProperties = {
            transformOrigin: "left center",
            transform: `rotateX(${rotX.toFixed(1)}deg) translateZ(${tz.toFixed(1)}px) scale(${sc.toFixed(3)})`,
            opacity: Number(op.toFixed(2)),
            transition:
              "transform .42s cubic-bezier(.22,.61,.36,1),opacity .42s ease,color .25s ease",
            fontSize: 14,
            fontWeight: strong ? 500 : 400,
            color: strong ? "#0f1a2e" : "#7b8494",
            textDecoration: "none",
            paddingLeft: active ? 0 : 15,
            display: "flex",
            alignItems: "center",
            gap: 9,
            willChange: "transform",
            backfaceVisibility: "hidden",
          };
          const inner = (
            <>
              {active && (
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flex: "0 0 auto" }} />
              )}
              {it.label}
            </>
          );
          return it.href.startsWith("#") ? (
            <a key={it.label} href={it.href} style={style}>
              {inner}
            </a>
          ) : (
            <Link key={it.label} href={it.href} style={style}>
              {inner}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
