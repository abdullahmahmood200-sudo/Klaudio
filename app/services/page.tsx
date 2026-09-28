"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { platforms, faqs } from "@/components/services/data";
import ServiceDetail from "@/components/services/ServiceDetail";
import JsonLd from "@/components/JsonLd";
import { ORG_ID, SITE_URL, breadcrumbNode, jsonLd } from "@/lib/site";

const menuLinks = [
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

/**
 * Structured data for the hub. It sits in the page rather than the layout so
 * it stays on /services only: a layout also wraps /services/<slug>, and the
 * service pages show neither the FAQs nor the full catalog.
 *
 * The ItemList advertises the six services and points at the page that owns
 * each one. Those pages carry the full offer catalogs under the same @id, so
 * nothing is restated twice.
 */
const hubGraph = jsonLd(
  {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/services#faqs`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumbNode("Services", "/services"),
  {
    "@type": "ItemList",
    "@id": `${SITE_URL}/services#catalog`,
    name: "Klaudio consulting services",
    numberOfItems: platforms.length,
    itemListElement: platforms.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${p.slug}#service`,
        name: p.title,
        description: p.metaDescription,
        serviceType: p.title,
        provider: { "@id": ORG_ID },
        url: `${SITE_URL}/services/${p.slug}`,
      },
    })),
  },
);

export default function ServicesPage() {
  // The hovered panel expands (CSS); clicking one swaps the detail block below.
  const [sel, setSel] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const active = platforms[sel];

  return (
    <div style={{ background: "#ffffff" }}>
      <JsonLd data={hubGraph} />
      <MobileMenu home={false} activeHref="/services" />

      {/* Top bar — the home page's sidebar doesn't apply here, so this page
          carries its own header. */}
      <header className="svc-topbar">
        <Link href="/" className="svc-logo" aria-label="Klaudio home">
          <Logo size={36} animated />
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-.01em", color: "#0f1a2e" }}>
            Klaudio
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
          Every platform{" "}
          <span style={{ color: "var(--accent)" }}>One partner</span>
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
          services across Salesforce, AWS, and ecommerce, delivered by certified
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
        <ServiceDetail platform={active} />

        {/* Every service also has its own page. The explorer above only ever
            puts one platform in the HTML, so these links are what makes the
            other seven reachable — to a visitor and to a crawler alike. */}
        <nav className="svc-all-links" aria-label="All services">
          <span className="svc-all-links-label">Explore each service</span>
          <ul>
            {platforms.map((p) => (
              <li key={p.slug}>
                <Link href={`/services/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
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
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="svc-faq-icon" aria-hidden>
                    +
                  </span>
                </button>
                {/* Always rendered, collapsed with CSS. Mounting the answer
                    only when open kept it out of the server HTML entirely, so
                    crawlers and AI retrievers saw questions with no answers —
                    the most citable copy on the site, invisible. */}
                <div className="svc-faq-panel" id={`faq-a-${i}`} role="region">
                  {/* Inner wrapper is the grid item, and carries no padding of
                      its own — the answer's own padding would otherwise keep
                      a collapsed panel 22px tall. */}
                  <div className="svc-faq-panel-inner">
                    <p className="svc-faq-a">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------ cta band */}
      <section className="svc-cta section-pad">
        <h2 className="svc-cta-title">Tell us what you&apos;re trying to fix</h2>
        <p className="svc-cta-body">
          Every engagement starts with a discovery call: your goals, your
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
