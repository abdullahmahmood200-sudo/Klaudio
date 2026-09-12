import Link from "next/link";
import { SOCIAL } from "@/lib/site";
import FooterWordmark from "./FooterWordmark";

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: "var(--font-quicksand)", background: "#f5f7fa" }}
    >
      {/* CTA band */}
      <div
        className="footer-cta"
        style={{ background: "var(--accent)", color: "#ffffff", padding: "72px 64px" }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "26px 44px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(38px,5.2vw,64px)",
              lineHeight: 1,
              letterSpacing: "-.03em",
              fontWeight: 300,
              color: "#ffffff",
            }}
          >
            Let&apos;s work <span style={{ fontWeight: 700 }}>together</span>
          </h2>
          <div
            style={{
              display: "flex",
              gap: 34,
              alignItems: "center",
              paddingBottom: 6,
            }}
          >
            <Link
              href="/contact"
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: 5,
              }}
            >
              Get in Touch
            </Link>
            <Link
              href="/services#faqs"
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: 5,
              }}
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div style={{ padding: "56px 64px 0", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {/* Social + legal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              minWidth: 220,
            }}
          >
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <a
                href={SOCIAL.instagram}
                aria-label="Klaudio on Instagram"
                target="_blank"
                rel="me noopener noreferrer"
                style={{ display: "flex", color: "#0f1a2e" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
              <a
                href={SOCIAL.facebook}
                aria-label="Klaudio on Facebook"
                target="_blank"
                rel="me noopener noreferrer"
                style={{ display: "flex", color: "#0f1a2e" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 12.5, fontWeight: 300, color: "#0f1a2e" }}>
                © 2026 Klaudio Agency
              </span>
              <Link href="/terms" style={{ fontSize: 12.5, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
                Terms of Use
              </Link>
              <Link href="/privacy" style={{ fontSize: 12.5, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Offices */}
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--accent)", marginBottom: 9 }}>
                San Francisco
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "#0f1a2e" }}>
                2200 Market Street, Suite 400
                <br />
                San Francisco, CA 94114
                <br />
                415.555.0142
              </div>
            </div>
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--accent)", marginBottom: 9 }}>
                New York
              </div>
              <div style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "#0f1a2e" }}>
                85 Fifth Avenue, Floor 6
                <br />
                New York, NY 10003
                <br />
                212.555.0198
              </div>
            </div>
          </div>
        </div>

        {/* Giant wordmark — doubles as the back-to-top control */}
        <div style={{ maxWidth: 1200, margin: "36px auto 0" }}>
          <FooterWordmark />
        </div>
      </div>
    </footer>
  );
}
