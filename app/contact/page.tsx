"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import { SEGMENTS } from "@/lib/site";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
];

const selects = [
  {
    name: "businessType",
    label: "Business Type",
    options: [...SEGMENTS.map((s) => s.name), "Other"],
  },
  {
    name: "service",
    label: "Service of Interest",
    options: [
      "Shopify Store Build or Migration",
      "VTEX Commerce",
      "AI & Automation",
      "Growth & Retention Marketing",
      "AWS Cloud",
      "Ecommerce Finance & Accounting",
      "Ongoing Support & Integrations",
    ],
  },
  {
    name: "timeline",
    label: "Estimated Timeline",
    options: ["Immediately", "1–3 months", "3–6 months", "6+ months"],
  },
  {
    name: "budget",
    label: "Estimated Budget",
    options: ["Under $10k", "$10k – $50k", "$50k – $100k", "$100k+"],
  },
  {
    name: "contactMethod",
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

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
              Tell us about your store, your current stack, and your growth
              goals. We&apos;ll get back to you within one business day.
            </p>

            <form onSubmit={onSubmit} style={{ textAlign: "left" }}>
              <div
                className="contact-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 34px" }}
              >
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Full Name</span>
                  <input className="cf-input" name="name" type="text" required placeholder="Jane Cooper" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Business Email</span>
                  <input className="cf-input" name="email" type="email" required placeholder="jane@company.com" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Phone Number</span>
                  <input className="cf-input" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Company / Brand</span>
                  <input className="cf-input" name="company" type="text" placeholder="Brand Inc." />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Job Title</span>
                  <input className="cf-input" name="jobTitle" type="text" placeholder="Head of Growth" />
                </label>

                {selects.map((s) => (
                  <SelectField key={s.name} name={s.name} label={s.label} options={s.options} />
                ))}

                <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Current Technology Platforms</span>
                  <input className="cf-input" name="platforms" type="text" placeholder="Shopify, Klaviyo, NetSuite, Amazon, TikTok Shop…" />
                </label>
                <label style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={labelStyle}>Project Description</span>
                  <textarea className="cf-area" name="description" placeholder="Tell us about your store and what you want to fix or build." />
                </label>
              </div>
              <button type="submit" className="submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
              <div role="status" aria-live="polite" style={{ marginTop: 16, fontSize: 14 }}>
                {status === "error" && (
                  <span style={{ color: "#b3261e" }}>
                    Something went wrong. Please try again or email us directly.
                  </span>
                )}
              </div>
            </form>
            {status === "sent" && <ThankYou onClose={() => setStatus("idle")} />}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function ThankYou({ onClose }: { onClose: () => void }) {
  const words = ["Thank", "you."];
  let i = 0;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="ty-overlay" onClick={onClose}>
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Message sent"
      className="ty-wrap"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="ty-title" aria-label="Thank you.">
        {words.map((w, wi) => (
          <span key={wi} className="ty-word" aria-hidden="true">
            {[...w].map((c) => (
              <span key={i} className="ty-char" style={{ animationDelay: `${0.1 + i++ * 0.07}s` }}>
                {c}
              </span>
            ))}
          </span>
        ))}
      </h2>
      <span className="ty-rule" />
      <p className="ty-sub">
        We got your message and will reply within one business day.
      </p>
      <button type="button" className="ty-again" onClick={onClose} autoFocus>
        Done
      </button>
      <button type="button" className="ty-x" aria-label="Close" onClick={onClose}>
        ×
      </button>
    </div>
    </div>
  );
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={labelStyle}>{label}</span>
      <div style={{ position: "relative" }}>
        <select className="cf-select" name={name} defaultValue={options[0]}>
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
