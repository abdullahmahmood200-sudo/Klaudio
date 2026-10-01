import Link from "next/link";
import type { Platform } from "./data";

/**
 * The offerings block for one service. Shared by the /services explorer, where
 * it swaps as you pick a platform, and by each /services/<slug> page, where it
 * is the whole point of the page.
 *
 * `as` controls the heading level: on the explorer the page already has an h1,
 * so the headline is an h2; on a service's own page the headline IS the h1.
 */
export default function ServiceDetail({
  platform,
  as = "h2",
  showEyebrow = true,
  parts,
}: {
  platform: Platform;
  as?: "h1" | "h2";
  showEyebrow?: boolean;
  /** For a grouped card (Ecommerce): list each platform's offerings under its own heading. */
  parts?: Platform[];
}) {
  const Heading = as;

  return (
    <>
      <div className="svc-detail-head">
        <div>
          {showEyebrow && (
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
              {platform.title}
            </div>
          )}
          <Heading
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
            {platform.headline}
          </Heading>
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
            {platform.blurb}
          </p>
        </div>
        <Link href="/contact" className="cta-btn svc-head-cta">
          Schedule a free consultation
        </Link>
      </div>

      {parts ? (
        parts.map((part) => (
          <section key={part.key} className="svc-part" aria-labelledby={`part-${part.key}`}>
            <div className="svc-part-head">
              <h3 id={`part-${part.key}`} className="svc-part-title">
                {part.title}
              </h3>
              <Link href={`/services/${part.slug}`} className="svc-part-link">
                {part.title} page →
              </Link>
            </div>
            <OfferingGroups platform={part} level="h4" />
          </section>
        ))
      ) : (
        <OfferingGroups platform={platform} level="h3" />
      )}

      {platform.extra && (
        <div className="svc-extra">
          <div className="svc-extra-label">{platform.extra.label}</div>
          <div className="svc-pills">
            {platform.extra.items.map((c) => (
              <span key={c} className="svc-pill">
                {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function OfferingGroups({
  platform,
  level,
}: {
  platform: Platform;
  level: "h3" | "h4";
}) {
  const Title = level;
  return (
    <div className="svc-groups">
      {platform.offerings.map((o) => (
        <div key={o.title} className="svc-group">
          <Title className="svc-group-title">{o.title}</Title>
          <ul className="svc-list">
            {o.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
