import type { Article } from "./types";
import salesforceHubspotGhl from "./articles/salesforce-vs-hubspot-vs-gohighlevel";
import aiVoiceAgents from "./articles/ai-voice-agents-inbound-calls";
import n8nVsZapier from "./articles/n8n-vs-zapier";
import shopifyVsVtex from "./articles/shopify-plus-vs-vtex";
import awsMigration from "./articles/aws-migration-checklist";
import aiAssociations from "./articles/ai-for-associations";
import financeClose from "./articles/connect-billing-payments-accounting";

export type { Article } from "./types";

/**
 * Every published article. To add one, create a file in ./articles and list
 * it here. The index page, sitemap, service pages, and author page all read
 * from this list. Remember to add it to public/llms.txt as well.
 */
const all: Article[] = [
  salesforceHubspotGhl,
  aiVoiceAgents,
  n8nVsZapier,
  shopifyVsVtex,
  awsMigration,
  aiAssociations,
  financeClose,
];

/** Newest first; ties keep the order above. */
export const articles: Article[] = [...all].sort((a, b) =>
  b.published.localeCompare(a.published),
);

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function articlesForService(serviceSlug: string) {
  return articles.filter((a) => a.services.includes(serviceSlug));
}

/** Rough reading time at 220 words a minute. */
export function readingMinutes(a: Article) {
  const text = [
    a.intro,
    ...a.sections.flatMap((s) => [
      s.heading,
      s.answer,
      ...(s.body ?? []).map((b) =>
        "p" in b
          ? b.p
          : "ul" in b
            ? b.ul.join(" ")
            : "ol" in b
              ? b.ol.join(" ")
              : b.table.rows.flat().join(" "),
      ),
    ]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}

/** "2026-09-28" to "28 September 2026", matching the legal pages' style. */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
