import type { MetadataRoute } from "next";
import { platforms } from "@/components/services/data";
import { articles } from "@/lib/insights";
import { AUTHOR, SITE_URL } from "@/lib/site";

/**
 * /case-studies is deliberately absent: the page currently shows placeholder
 * client names, so listing it would invite engines to index and cite invented
 * clients. Add it back once real engagements are written up.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // One entry per service page. These are the deep pages that answer a
    // specific query, so they rank above /contact in priority.
    ...platforms.map((p) => ({
      url: `${SITE_URL}/services/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: new Date(articles[0]?.updated ?? Date.now()),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Articles carry their real updated date, which engines use as a
    // freshness signal. Bump `updated` in the article when it changes.
    ...articles.map((a) => ({
      url: `${SITE_URL}/insights/${a.slug}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/authors/${AUTHOR.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
