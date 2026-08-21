import Image from "next/image";
import Link from "next/link";

/**
 * Industry Solutions — a split row that sits directly under the Industries
 * carousel. The section itself carries no padding so the media column can
 * bleed to the top, bottom, and right edges of the page; the usual 80px
 * vertical rhythm lives on the content column instead. The media's left edge
 * is clipped into a diagonal, echoing the angled/full-bleed treatment used
 * elsewhere on the site.
 */
export default function IndustrySolutions() {
  return (
    <section
      id="industry-solutions"
      className="solutions-row"
      style={{
        background: "#ffffff",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        borderTop: "1px solid #eef1f5",
      }}
    >
      <div className="solutions-content">
        <div className="solutions-badge" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.6-4.8 2.6.9-5.4L4.2 9.2l5.4-.8L12 3.5z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          style={{
            fontFamily: "var(--font-quicksand)",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          Industry Solutions
        </div>

        <h2
          className="solutions-title"
          style={{
            margin: "0 0 16px",
            fontSize: 36,
            lineHeight: 1.12,
            fontWeight: 400,
            letterSpacing: "-.025em",
            color: "#0f1a2e",
            textWrap: "pretty",
          }}
        >
          Industry Solutions We Offer
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#586074",
            textWrap: "pretty",
          }}
        >
          Deep industry knowledge, turned into systems your customers feel.
        </p>

        <Link href="/contact" className="cta-btn solutions-cta">
          Schedule a free consultation
        </Link>
      </div>

      <div className="solutions-media">
        <Image
          src="/Manufacturing.avif"
          alt="Engineers reviewing operations on the plant floor"
          fill
          sizes="(max-width: 860px) 100vw, 54vw"
          style={{ objectFit: "cover" }}
          draggable={false}
        />
      </div>
    </section>
  );
}
