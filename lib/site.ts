/**
 * Single source of truth for the site's identity: canonical origin, the copy
 * that goes into <title>/<meta description>, and the JSON-LD entity graph.
 *
 * Answer engines (ChatGPT Search, Perplexity, Google AI Overviews, Claude)
 * resolve "who is Klaudio" from the Organization node below, so every page
 * points its structured data at the same @id rather than re-declaring the
 * company. Change the facts here, not in the pages.
 */

/** Canonical origin. No trailing slash, metadataBase composes paths onto it. */
export const SITE_URL = "https://klaudio.llc";

/** The registered company name. Use it everywhere, with no variants. */
export const SITE_NAME = "Klaudio LLC";

/** Stable identifier for the company node that every page's graph references. */
export const ORG_ID = `${SITE_URL}/#organization`;

/**
 * The canonical one-sentence definition of the company. The meta description,
 * the Organization schema, the /about page, and llms.txt all say this
 * same sentence, so every source an answer engine reads agrees on who we are.
 * If you change it here, change public/llms.txt to match.
 */
export const SITE_DESCRIPTION =
  "Klaudio LLC is an ecommerce technology and AI consulting firm based in Anchorage, Alaska, that builds, automates, and scales online stores on Shopify and VTEX for DTC, headless, omnichannel, and B2B wholesale brands, with AI automation, retention marketing, AWS cloud, and ecommerce finance systems.";

/** Year the company was founded. Published as the Organization's `foundingDate`. */
export const FOUNDED = "2026";

/** Registered office. Shown in the footer and published as the Organization's address. */
export const ADDRESS = {
  street: "821 N St, Suite 102",
  city: "Anchorage",
  region: "AK",
  postalCode: "99501",
  country: "US",
} as const;

/**
 * Legal identity, used by the Terms of Use and Privacy Policy pages.
 *
 * LEGAL_ENTITY must match the name on the Alaska registration exactly, so
 * change it here if the filed name differs from the trading name.
 */
export const LEGAL = {
  entity: "Klaudio LLC",
  jurisdiction: "State of Alaska, United States",
  state: "Alaska",
  email: "hello@klaudio.llc",
  /** Date the current wording took effect. Bump it whenever the text changes. */
  effective: "13 September 2026",
} as const;

/**
 * Fields every page's Open Graph block needs. A child page's `openGraph`
 * replaces the parent's outright rather than merging into it, so each page
 * spreads these in alongside its own title, description, and url.
 */
export const OG_DEFAULTS = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
} as const;

/** The service lines, phrased as a person would ask for them. */
export const SERVICE_LINES = [
  "Shopify Development",
  "VTEX Commerce",
  "Ecommerce AI & Automation",
  "Ecommerce Growth & Retention Marketing",
  "Ecommerce Cloud Infrastructure on AWS",
  "Ecommerce Finance & Accounting Systems",
] as const;

/** The one industry Klaudio serves. Sub-categories are in SEGMENTS below. */
export const TARGET_INDUSTRY = "E-Commerce & Digital Commerce Brands";

export type Segment = {
  name: string;
  /** Anchor id on /about, and the name of the carousel photo in /public/industries. */
  slug: string;
  /** Who they are and what they need, in one sentence. */
  summary: string;
  /** Job titles of the people who buy, published as the audience's `audienceType`. */
  buyers: string[];
};

/**
 * The four kinds of ecommerce business Klaudio serves. The homepage carousel
 * (components/home/data.ts adds the photos), the /about page, the homepage
 * FAQ, the Organization schema's `audience`, and public/llms.txt all read or
 * repeat this list, so change it here and in llms.txt together.
 */
export const SEGMENTS: Segment[] = [
  {
    name: "High-Growth DTC Brands",
    slug: "dtc-brands",
    summary:
      "Fast-moving consumer goods brands in apparel, beauty, wellness, and food and beverage, with high ad spend and order volumes.",
    buyers: ["Founders", "CMOs", "Heads of Growth"],
  },
  {
    name: "Headless & High-Traffic Stores",
    slug: "headless-high-traffic",
    summary:
      "Brands running custom-built web apps or high-volume storefronts that need fast page loads and resilient cloud uptime.",
    buyers: ["CTOs", "Technical Co-Founders", "VPs of Engineering"],
  },
  {
    name: "Multi-Channel & Omnichannel Retailers",
    slug: "omnichannel-retail",
    summary:
      "Retailers selling through their own website, marketplaces like Amazon and TikTok Shop, and physical stores, who need connected back-end systems.",
    buyers: ["COOs", "Operations Directors", "Founders"],
  },
  {
    name: "B2B Commerce & Wholesale Distributors",
    slug: "b2b-wholesale",
    summary:
      "Distributors, manufacturers, and trade suppliers moving from phone and email orders to digital ordering portals with dedicated sales pipelines.",
    buyers: ["VPs of Sales", "Operations Heads", "Managing Directors"],
  },
];

export const INDUSTRIES = SEGMENTS.map((s) => s.name);

/**
 * Published social profiles. These double as the Organization's `sameAs`
 * edges, which is how answer engines confirm that the site, the Instagram
 * account, and the Facebook profile are one entity rather than three.
 * Tracking parameters are stripped, since a `sameAs` has to be canonical.
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/klaudio.llc/",
  facebook: "https://www.facebook.com/profile.php?id=61593339762061",
} as const;

/**
 * The company itself. Kept deliberately free of phone and email contact
 * points: the site has none published yet, and a fabricated `telephone` is
 * worse than an absent one, because it teaches a wrong fact.
 * Add `telephone` and `email` here once they are real.
 */
export function organizationNode() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL.entity,
    foundingDate: FOUNDED,
    foundingLocation: {
      "@type": "Place",
      name: `${ADDRESS.city}, Alaska, United States`,
    },
    alternateName: "Klaudio",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/klaudio-mark.png`,
      width: 1024,
      height: 1024,
    },
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    knowsAbout: [TARGET_INDUSTRY, ...SERVICE_LINES],
    // Who the firm serves, so "who does Klaudio LLC work with" resolves to
    // the four segments and the roles that buy from each.
    audience: SEGMENTS.map((s) => ({
      "@type": "BusinessAudience",
      name: s.name,
      description: s.summary,
      audienceType: s.buyers.join(", "),
    })),
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: [...SERVICE_LINES],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Consulting services",
      itemListElement: SERVICE_LINES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": ORG_ID } },
      })),
    },
  };
}

/**
 * Klaudio presents itself as one team, with no individual names on the site.
 * The Insights articles are credited to the company, so every article's
 * `author` points at the Organization node and the byline reads as below.
 */
export const AUTHOR_NAME = "the Klaudio LLC team";
export const AUTHOR_ID = ORG_ID;

/** The site node, so engines treat the four pages as one publication. */
export function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

/** Trail for a single-level page, e.g. breadcrumb("Services", "/services"). */
export function breadcrumbNode(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** Wraps nodes in the @graph envelope Google prefers for multi-node pages. */
export function jsonLd(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
