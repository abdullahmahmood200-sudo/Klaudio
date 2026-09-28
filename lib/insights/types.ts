/**
 * Content model for the Insights articles.
 *
 * Articles live in code rather than in markdown files read from disk, because
 * the site runs on Cloudflare Workers, where there is no filesystem at request
 * time. Each article compiles into the bundle like any other module.
 *
 * The shape enforces the answer-first structure answer engines extract from:
 * every section is a question heading, then a short direct `answer`, then the
 * supporting detail.
 *
 * Inline text supports two bits of markup: **bold** and [label](/href).
 */

export type Block =
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type Section = {
  /** Phrase it as the question a reader would type or ask. */
  heading: string;
  /** Two or three sentences that answer the heading on their own. */
  answer: string;
  body?: Block[];
};

export type Article = {
  slug: string;
  /** The page's h1 and <title>. */
  title: string;
  /** Meta description, and the card summary on /insights. */
  description: string;
  /** ISO dates (YYYY-MM-DD). Bump `updated` whenever the content changes. */
  published: string;
  updated: string;
  /** Slugs of the /services/<slug> pages this article supports. */
  services: string[];
  /** The opening paragraph: the whole answer in brief. */
  intro: string;
  takeaways: string[];
  sections: Section[];
};
