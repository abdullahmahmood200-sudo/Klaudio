import Link from "next/link";
import LogoStrip from "./LogoStrip";

/**
 * Landing hero — the site had no default landing page, so this sits above the
 * existing service-card section and gives a first-time visitor a headline, a
 * CTA, and proof before they scroll into the sections.
 *
 * Three parts: the statement hero, a platform wordmark strip, and an outcome
 * stat band.
 */

// PLACEHOLDER FIGURES — confirm these with the client before launch.
const stats = [
  { value: "12+", label: "Years delivering" },
  { value: "150+", label: "Projects shipped" },
  { value: "98%", label: "Clients who stay" },
];

export default function Landing() {
  return (
    <section id="home" className="section-pad lp-hero">
      <div
        style={{
          fontFamily: "var(--font-quicksand)",
          fontWeight: 400,
          fontSize: 10,
          letterSpacing: ".22em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 20,
        }}
      >
        AI & Technology Consulting
      </div>

      <h1 className="lp-title">
        We build the systems your business{" "}
        <span style={{ color: "var(--accent)" }}>actually runs on</span>
      </h1>

      <p className="lp-sub">
        Salesforce, AWS, ecommerce, and AI automation — designed around your
        processes, integrated with what you already use, and supported long
        after launch.
      </p>

      <div className="lp-ctas">
        <Link href="/contact" className="cta-btn">
          Schedule a free consultation
        </Link>
        <Link href="/services" className="lp-ghost">
          See our services <span aria-hidden>→</span>
        </Link>
      </div>

      <LogoStrip />

      <div className="lp-stats">
        {stats.map((s) => (
          <div key={s.label} className="lp-stat">
            <div className="lp-stat-value">{s.value}</div>
            <div className="lp-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
