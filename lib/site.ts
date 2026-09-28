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
 * the Organization schema, the homepage About block, and llms.txt all say this
 * same sentence, so every source an answer engine reads agrees on who we are.
 * If you change it here, change public/llms.txt to match.
 */
export const SITE_DESCRIPTION =
  "Klaudio LLC is an AI and technology consulting firm based in Anchorage, Alaska, that implements and runs AI automation, revenue operations, AWS cloud, Shopify and VTEX ecommerce, and financial systems for organizations worldwide.";

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
  "AI & Automation",
  "Revenue Operations",
  "AWS Cloud",
  "Shopify & Ecommerce",
  "VTEX Commerce",
  "Financial Systems",
] as const;

export const INDUSTRIES = [
  "Associations",
  "Nonprofits",
  "Professional Services",
  "Healthcare",
  "Real Estate",
  "Financial Services",
  "Education",
  "Manufacturing",
] as const;

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
    // The partners, so engines can answer "who runs Klaudio LLC".
    member: TEAM.map((m) => ({ "@id": personId(m) })),
    knowsAbout: [...SERVICE_LINES],
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

export type TeamMember = {
  name: string;
  slug: string;
  jobTitle: string;
  /** Service lines this partner leads, published as `knowsAbout`. */
  practice: string[];
  /** Square headshot in /public, or null to show the initials placeholder. */
  image: string | null;
  bio: string;
  /** Profile URLs (LinkedIn first). Keep the job title there the same as here. */
  sameAs: string[];
  /** Has a page at /authors/<slug> because it writes Insights articles. */
  author: boolean;
};

/**
 * The partners. Shown in the homepage team section and published as Person
 * nodes that the Organization lists as members. Titles are "Partner" plus the
 * area each one leads, so a person can be matched to a service.
 */
export const TEAM: TeamMember[] = [
  {
    name: "Abdullah Mahmood Rastgar",
    slug: "abdullah-mahmood-rastgar",
    jobTitle: "Partner, AI & Automation and AWS Cloud",
    practice: ["AI & Automation", "AWS Cloud"],
    image: "/team/abdullah-mahmood-rastgar.jpg",
    bio: "Abdullah Mahmood Rastgar is a Partner at Klaudio LLC who leads its AI & Automation and AWS Cloud practices. Abdullah also writes the Klaudio LLC Insights series on how organizations choose, implement, and run their business systems.",
    sameAs: ["https://www.linkedin.com/in/abdullah-rastgar-b0181a2b6/"],
    author: true,
  },
  {
    name: "Ahmed Sheikh",
    slug: "ahmed-sheikh",
    jobTitle: "Partner, Client Relations",
    practice: [],
    // TODO: add the headshot at /team/ahmed-sheikh.jpg and point to it here.
    image: null,
    bio: "Ahmed Sheikh is a Partner at Klaudio LLC who leads client relations, from the first conversation and discovery meetings through delivery and ongoing support.",
    // TODO: add the LinkedIn profile URL.
    sameAs: [],
    author: false,
  },
];

/** Author pages get their own URL as the node id; others live on the homepage. */
export function personId(m: TeamMember) {
  return m.author
    ? `${SITE_URL}/authors/${m.slug}#person`
    : `${SITE_URL}/#${m.slug}`;
}

export function personNode(m: TeamMember) {
  return {
    "@type": "Person",
    "@id": personId(m),
    name: m.name,
    jobTitle: m.jobTitle,
    ...(m.image ? { image: `${SITE_URL}${m.image}` } : {}),
    ...(m.author ? { url: `${SITE_URL}/authors/${m.slug}` } : {}),
    description: m.bio,
    worksFor: { "@id": ORG_ID },
    ...(m.practice.length ? { knowsAbout: m.practice } : {}),
    ...(m.sameAs.length ? { sameAs: m.sameAs } : {}),
  };
}

/**
 * Author of the Insights articles. Answer engines weigh who wrote a page, so
 * every article points its `author` at this one Person node.
 */
export const AUTHOR = TEAM[0] as TeamMember & { image: string };
export const AUTHOR_ID = personId(AUTHOR);

export function authorNode() {
  return personNode(AUTHOR);
}

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
