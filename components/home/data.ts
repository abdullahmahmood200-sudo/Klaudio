import { SEGMENTS, type Segment } from "@/lib/site";

export type Service = {
  title: string;
  blurb: string;
  img: string;
  /**
   * The /services/<slug> page this card leads to. The home cards are grouped
   * for the landing page, so "Ecommerce" covers both the Shopify and VTEX
   * pages and points at the Shopify one.
   */
  slug: string;
};

export const services: Service[] = [
  {
    title: "Ecommerce",
    slug: "shopify-development",
    blurb:
      "Build and scale your store on Shopify and VTEX: custom themes, apps, headless storefronts, marketplaces, and replatforming that keep pages fast and checkout converting.",
    img: "/CRM%20&%20Marketing.avif",
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    blurb:
      "AI support agents that answer order-status and product questions, plus automations for inventory, fulfillment, returns, and reviews, so your team stops copy-pasting between apps.",
    img: "/Ai%20&%20Automation.avif",
  },
  {
    title: "Growth & Retention",
    slug: "crm-marketing-automation",
    blurb:
      "Klaviyo email and SMS flows, Meta Ads with server-side tracking, and landing pages that turn first orders into repeat customers and lift lifetime value.",
    img: "/Growth%20&%20Retention.avif",
  },
  {
    title: "AWS Cloud",
    slug: "aws-cloud",
    blurb:
      "Infrastructure for headless storefronts, custom apps, and data pipelines on AWS, built to stay fast through Black Friday traffic without overpaying the rest of the year.",
    img: "/Cloud.avif",
  },
  {
    title: "Ecommerce Finance",
    slug: "financial-systems",
    blurb:
      "Shopify, Amazon, and payment payouts reconciled into QuickBooks, Xero, or NetSuite, with sales tax, COGS, and margin reporting on one set of numbers.",
    img: "/Financial%20Systems.avif",
  },
];

export type NavItem = { label: string; href: string; active?: boolean };

export const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About Us", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type Industry = Segment & { img: string };

/** The segments from lib/site.ts, each with its carousel photo. */
export const industries: Industry[] = SEGMENTS.map((s) => ({
  ...s,
  img: `/industries/${s.slug}.avif`,
}));

export type WhyCard = {
  num: string;
  title: string;
  body: string;
  x: number;
  y: number;
  rot: number;
};

export const whyData: WhyCard[] = [
  { num: "01", title: "Revenue-First", body: "We start from conversion rate, average order value, and repeat purchase, then pick the platform and apps that move them.", x: 597, y: 12, rot: -6 },
  { num: "02", title: "Full-Stack Commerce", body: "One team covers the storefront, marketing, AI automation, cloud, and finance, so your apps and data actually talk to each other.", x: 48, y: 108, rot: 6 },
  { num: "03", title: "Built to Convert", body: "Fast pages, a clean checkout, and tracking you can trust. Every build is measured against sales, not launch dates.", x: 578, y: 362, rot: -6 },
  { num: "04", title: "Here for Peak Season", body: "We stay after launch with monitoring, optimization, and support, including the Black Friday and Cyber Monday rush.", x: 48, y: 458, rot: 6 },
];

export type ProcessStep = { num: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Discovery", body: "We review your store, tech stack, analytics, and growth goals before recommending anything." },
  { num: "02", title: "Strategy", body: "We map the platform, apps, integrations, and roadmap that fit your catalog and channels." },
  { num: "03", title: "Design", body: "We design the storefront, customer journeys, and data flows behind the build." },
  { num: "04", title: "Implementation", body: "We build the store, automations, and integrations with your ERP, 3PL, and marketing tools." },
  { num: "05", title: "Testing", body: "We test checkout, payments, page speed, and tracking before go-live." },
  { num: "06", title: "Launch", body: "We launch with redirects, monitoring, and your team supported through go-live." },
  { num: "07", title: "Support", body: "We keep optimizing conversion and performance, and support you through peak season." },
];

export type HomeFaq = { q: string; a: string };

/**
 * Homepage FAQ. Written answer-first: the opening sentence of each answer
 * stands on its own, because that is the sentence an answer engine lifts.
 * Rendered as visible text and mirrored into FAQPage schema in app/page.tsx.
 */
export const homeFaqs: HomeFaq[] = [
  {
    q: "What does Klaudio LLC do?",
    a: "Klaudio LLC is an ecommerce technology and AI consulting firm that builds, automates, and scales online stores. Its services are Shopify and VTEX development, AI automation for ecommerce, growth and retention marketing (Klaviyo, Meta Ads, and landing pages), AWS cloud for commerce, and ecommerce finance systems, with managed support after launch.",
  },
  {
    q: "Who does Klaudio LLC work with?",
    a: "Klaudio LLC works with e-commerce and digital commerce brands in four segments: high-growth DTC brands in apparel, beauty, wellness, and food and beverage; headless and high-traffic custom stores; multi-channel and omnichannel retailers selling on their own site, Amazon, TikTok Shop, and in physical stores; and B2B commerce and wholesale distributors moving from phone and email orders to digital portals.",
  },
  {
    q: "Who at a brand does Klaudio LLC usually work with?",
    a: "It depends on the segment. At DTC brands Klaudio LLC works with founders, CMOs, and heads of growth; at headless and high-traffic stores with CTOs, technical co-founders, and VPs of engineering; at omnichannel retailers with COOs, operations directors, and founders; and at B2B and wholesale companies with VPs of sales, operations heads, and managing directors.",
  },
  {
    q: "Where is Klaudio LLC based?",
    a: "Klaudio LLC was founded in 2026 and is registered in Alaska, with its office at 821 N St, Suite 102, Anchorage, AK 99501. The team works with ecommerce brands remotely across the United States and internationally.",
  },
  {
    q: "Should our store be on Shopify, Shopify Plus, or VTEX?",
    a: "Most direct-to-consumer brands are best served by Shopify, and Shopify Plus makes sense once you need B2B and wholesale, checkout customization, or several storefronts. VTEX suits marketplaces with third-party sellers and retailers that need online and in-store inventory in one system. Klaudio LLC builds on all three, so the recommendation follows your catalog and channels. [Read the Shopify Plus vs. VTEX comparison](/insights/shopify-plus-vs-vtex).",
  },
  {
    q: "Can Klaudio LLC migrate our store without losing search rankings?",
    a: "Yes. Klaudio LLC migrates stores from WooCommerce, Magento, BigCommerce, Wix, and other platforms, moving product, customer, and order data and redirecting every old URL so search rankings carry over.",
  },
  {
    q: "How can AI help an ecommerce store?",
    a: "AI takes on the high-volume, repetitive work in an online store: answering order-status, shipping, and return questions, recommending products, writing product descriptions, and routing tickets. Klaudio LLC builds AI support agents grounded in your own catalog and policies, with a handoff to your team when a question needs a person.",
  },
  {
    q: "Can Klaudio LLC connect our store to the tools we already use?",
    a: "Yes. Klaudio LLC connects Shopify and VTEX to your ERP, 3PL and warehouse, marketplaces, email and SMS, and accounting platforms, including NetSuite, QuickBooks, Xero, Klaviyo, Meta Ads, Amazon, TikTok Shop, and in-store POS systems. Where a tool does not need replacing, it gets connected instead, so orders, inventory, and customer data stay in sync.",
  },
  {
    q: "How long does a typical ecommerce project take?",
    a: "Timelines depend on scope: a single integration or automation is far smaller than a full store build or a replatform. After discovery you receive a written roadmap with milestones and delivery dates, and launches are planned around your peak seasons.",
  },
];
