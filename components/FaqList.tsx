import { Inline } from "@/components/insights/Rich";

export type FaqItem = { q: string; a: string };

/**
 * A server-rendered FAQ built on native <details>, so every answer is in the
 * HTML whether or not it is open. Answers accept the same [label](/href) and
 * **bold** markup as the Insights articles.
 */
export default function FaqList({
  id,
  eyebrow = "FAQ",
  title,
  items,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  items: FaqItem[];
}) {
  return (
    <section id={id} className="section-pad home-faq">
      <div className="home-faq-inner">
        <p className="home-faq-eyebrow">{eyebrow}</p>
        <h2 className="home-faq-title">{title}</h2>

        <div className="home-faq-list">
          {items.map((f, i) => (
            <details key={f.q} className="home-faq-item" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
                <span className="home-faq-icon" aria-hidden />
              </summary>
              <p>
                <Inline text={f.a} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Answer text for FAQPage schema: link and bold markup reduced to plain words. */
export function plainAnswer(a: string) {
  return a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}

/** FAQPage node mirroring a visible FAQ list, question for question. */
export function faqPageNode(atId: string, items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": atId,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainAnswer(f.a) },
    })),
  };
}
