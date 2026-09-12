import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Several AI crawlers are separate user agents from their search bots, and a
 * bare `User-agent: *` does not always satisfy the ones that look for
 * themselves by name. They are listed explicitly so the allow is unambiguous.
 *
 * Note the split in OpenAI's fleet: OAI-SearchBot and PerplexityBot index for
 * answer results, GPTBot and ClaudeBot/CCBot collect training data. All are
 * allowed here; if the client ever wants to be citable but not trainable,
 * remove GPTBot, ClaudeBot, and CCBot and keep the rest.
 */
const AI_AGENTS = [
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT fetching a page during a conversation
  "GPTBot", // OpenAI crawler
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity fetching a cited page
  "ClaudeBot", // Anthropic crawler
  "Claude-User", // Claude fetching a page during a conversation
  "Claude-SearchBot",
  "Google-Extended", // Gemini grounding / AI Overviews
  "Applebot-Extended",
  "CCBot", // Common Crawl, upstream of many models
  "meta-externalagent",
  "cohere-ai",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Placeholder client work, kept out of the index until it is real.
        disallow: ["/case-studies"],
      },
      {
        userAgent: AI_AGENTS,
        allow: "/",
        disallow: ["/case-studies"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
