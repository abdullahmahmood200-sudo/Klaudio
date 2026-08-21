"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/#about" },
];

const selects = [
  {
    label: "Service of Interest",
    options: [
      "AI, Automation & Data",
      "CRM & Marketing",
      "Cloud",
      "Financial Systems",
      "Managed Services & Integrations",
    ],
  },
  {
    label: "Estimated Timeline",
    options: ["Immediately", "1–3 months", "3–6 months", "6+ months"],
  },
  {
    label: "Estimated Budget",
    options: ["Under $10k", "$10k – $50k", "$50k – $100k", "$100k+"],
  },
  {
    label: "Preferred Contact Method",
    options: ["Email", "Phone", "Video call"],
  },
];

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: ".06em",
  color: "#7b8494",
  fontWeight: 500,
};

export default function ContactPage() {
  return (
    <div
      className="page-shell"
      style={{ display: "flex", minHeight: "100dvh", background: "#ffffff" }}
    >
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
          height: "100dvh",
        }}
      >
        <Link
          href="/"
          aria-label="Klaudio home"
          style={{ display: "flex", alignItems: "center", gap: 10, width: "fit-content" }}
        >
          <Logo size={36} animated />
        </Link>

        {/* Mobile-only floating hamburger; the desktop nav below is hidden on mobile */}
        <MobileMenu home={false} activeHref="/contact" />

        <nav style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{ fontSize: 14, fontWeight: 400, color: "#7b8494", textDecoration: "none", paddingLeft: 15 }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{ fontSize: 14, fontWeight: 500, color: "#0f1a2e", textDecoration: "none", display: "flex", alignItems: "center", gap: 9 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            Contact
          </Link>
        </nav>
      </aside>

      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <section
          id="contact"
          className="section-pad"
          style={{ background: "#ffffff", padding: "80px 64px 96px", overflow: "hidden" }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-quicksand)",
                fontWeight: 400,
                fontSize: 10,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Get in touch
            </div>
            <h1
              style={{
                margin: "0 0 12px",
                fontSize: 40,
                lineHeight: 0.98,
                fontWeight: 500,
                letterSpacing: "-.045em",
                color: "#0f1a2e",
              }}
            >
              Contact
            </h1>
            <p
              style={{
                margin: "0 auto 44px",
                maxWidth: 520,
                fontSize: 16,
                lineHeight: 1.6,
                fontWeight: 300,
                color: "#586074",
                textWrap: "pretty",
              }}
            >
              Tell us about your goals and current systems. We&apos;ll get back
              to you within one business day.
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ textAlign: "left" }}>
              <div
                className="contact-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 34px" }}
              >
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Full Name</span>
                  <input className="cf-input" type="text" placeholder="Jane Cooper" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Business Email</span>
                  <input className="cf-input" type="email" placeholder="jane@company.com" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Phone Number</span>
                  <input className="cf-input" type="tel" placeholder="+1 (555) 000-0000" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Company</span>
                  <input className="cf-input" type="text" placeholder="Company Inc." />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Job Title</span>
                  <input className="cf-input" type="text" placeholder="Director of Operations" />
                </label>

                {selects.map((s) => (
                  <SelectField key={s.label} label={s.label} options={s.options} />
                ))}

                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Current Technology Platforms</span>
                  <input className="cf-input" type="text" placeholder="Salesforce, HubSpot, Azure, NetSuite…" />
                </label>
                <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Project Description</span>
                  <textarea className="cf-area" placeholder="Tell us about your technology goals." />
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={labelStyle}>{label}</span>
      <div style={{ position: "relative" }}>
        <select className="cf-select" defaultValue={options[0]}>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: 2,
            top: 9,
            color: "#9aa3b2",
            fontSize: 12,
            pointerEvents: "none",
          }}
        >
          ▾
        </span>
      </div>
    </label>
  );
}
