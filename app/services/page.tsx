"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { platforms, faqs } from "@/components/services/data";

const menuLinks = [
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function ServicesPage() {
  // The hovered panel expands (CSS); clicking one swaps the detail block below.
  const [sel, setSel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = platforms[sel];

  return (
    <div style={{ background: "#ffffff" }}>
      <MobileMenu home={false} activeHref="/services" />

      {/* Top bar — the home page's sidebar doesn't apply here, so this page
          carries its own header, same as /case-studies does. */}
      <header className="svc-topbar">
        <Link href="/" className="svc-logo" aria-label="Nyxo home">
          <span style={{ width: 32, height: 32, position: "relative", display: "block" }}>
            <span style={{ position: "absolute", width: 17, height: 17, background: "#0f1a2e", transform: "rotate(45deg)", top: 0, left: 7, borderRadius: 3 }} />
            <span style={{ position: "absolute", width: 17, height: 17, background: "var(--accent)", transform: "rotate(45deg)", top: 8, left: 7, borderRadius: 3, opacity: 0.9 }} />
          </span>
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em", color: "#0f1a2e" }}>
            Nyxo
          </span>
        </Link>

        <nav className="svc-topnav">
          {menuLinks.map((l) => (
            <Link key={l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* ---------------------------------------------------------------- hero */}
      <section className="section-pad" style={{ padding: "72px 64px 44px", textAlign: "center" }}>
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
            maxWidth: 700,
            fontSize: 36,
            lineHeight: 1.12,
            fontWeight: 400,
            letterSpacing: "-.025em",
            color: "#0f1a2e",
            textWrap: "pretty",
          }}
        >
          One partner for the platforms your{" "}
          <span style={{ color: "var(--accent)" }}>business runs on</span>
        </h1>
        <p
          style={{
            margin: "18px auto 0",
            maxWidth: 620,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#586074",
            textWrap: "pretty",
          }}
        >
          Consulting, implementation, integration, migration, and managed
          services across Salesforce, AWS, and ecommerce — delivered by certified
          teams and supported long after go-live.
        </p>
      </section>

      {/* ------------------------------------------------- platform panel row */}
      {/* On mobile the whole section turns into a sticky chip bar (see
          .svc-panel-row), so it stays reachable while the detail scrolls. */}
      <section className="section-pad svc-panel-row" style={{ padding: "0 64px 64px" }}>
        <div className="service-cards svc-panels">
          {platforms.map((p, i) => (
            <div
              key={p.key}
              className="service-card"
              data-selected={i === sel || undefined}
              onClick={(e) => {
                // On mobile these are chips in a horizontal scroller — slide
                // the tapped one into view. block:"nearest" keeps the desktop
                // row from jumping vertically.
                e.currentTarget.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
                setSel(i);
              }}
            >
              <span className="service-card-title">{p.title}</span>
              <span className="service-card-sub">{p.sub}</span>
              <div
                style={{
                  marginTop: 14,
                  flex: 1,
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "#e4e9f1",
                }}
              >
                {/* Absolute fill + cover, matching the home cards: expanding the
                    panel reveals more of the image rather than stretching it. */}
                <img src={p.img} alt={p.title} className="service-card-img" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ detail block */}
      <section className="svc-detail section-pad">
        <div className="svc-detail-head">
          <div>
            <div
              style={{
                fontFamily: "var(--font-quicksand)",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 14,
              }}
            >
              {active.title}
            </div>
            <h2
              style={{
                margin: "0 0 14px",
                fontSize: 36,
                lineHeight: 1.12,
                fontWeight: 400,
                letterSpacing: "-.025em",
                color: "#0f1a2e",
                textWrap: "pretty",
              }}
            >
              {active.headline}
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: 620,
                fontSize: 16,
                lineHeight: 1.6,
                color: "#586074",
                textWrap: "pretty",
              }}
            >
              {active.blurb}
            </p>
          </div>
          <Link href="/contact" className="cta-btn svc-head-cta">
            Schedule a free consultation
          </Link>
        </div>

        <div className="svc-groups">
          {active.offerings.map((o) => (
            <div key={o.title} className="svc-group">
              <h3 className="svc-group-title">{o.title}</h3>
              <ul className="svc-list">
                {o.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {active.extra && (
          <div className="svc-extra">
            <div className="svc-extra-label">{active.extra.label}</div>
            <div className="svc-pills">
              {active.extra.items.map((c) => (
                <span key={c} className="svc-pill">
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ---------------------------------------------------------------- faq */}
      <section id="faqs" className="section-pad svc-faqs" style={{ padding: "80px 64px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--font-quicksand)",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            FAQs
          </div>
          <h2
            style={{
              margin: "0 0 34px",
              fontSize: 36,
              lineHeight: 1.12,
              fontWeight: 400,
              letterSpacing: "-.025em",
              color: "#0f1a2e",
            }}
          >
            Questions we get asked first
          </h2>

          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="svc-faq" data-open={open || undefined}>
                <button
                  type="button"
                  className="svc-faq-q"
                  aria-expanded={open}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="svc-faq-icon" aria-hidden>
                    +
                  </span>
                </button>
                {open && <p className="svc-faq-a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------ cta band */}
      <section className="svc-cta section-pad">
        <h2 className="svc-cta-title">Tell us what you&apos;re trying to fix</h2>
        <p className="svc-cta-body">
          Every engagement starts with a discovery call — your goals, your
          current systems, and what good looks like. No platform pitch until we
          understand the problem.
        </p>
        <Link href="/contact" className="cta-btn svc-cta-btn">
          Schedule a free consultation
        </Link>
      </section>

      <Footer />
    </div>
  );
}
