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
    title: "AI & Automation",
    slug: "ai-automation",
    blurb:
      "Deploy intelligent agents and workflow automation that take on the repetitive work, freeing your team to focus on the decisions that actually move revenue.",
    img: "/Ai%20&%20Automation.avif",
  },
  {
    title: "Revenue Operations",
    slug: "crm-marketing-automation",
    blurb:
      "Unify your customer data and automate campaigns across every channel, so more conversations turn into closed, repeatable revenue.",
    img: "/CRM%20&%20Marketing.avif",
  },
  {
    title: "AWS Cloud",
    slug: "aws-cloud",
    blurb:
      "Migrate, modernize, and secure your infrastructure on AWS, architected for speed, resilience, and predictable cost.",
    img: "/Cloud.avif",
  },
  {
    title: "Ecommerce",
    slug: "shopify-development",
    blurb:
      "Build and scale storefronts on Shopify and VTEX: themes, custom apps, marketplaces, and migrations that keep loading fast and converting.",
    img: "/Professional.avif",
  },
  {
    title: "Financial Systems",
    slug: "financial-systems",
    blurb:
      "Connect billing, accounting, and reporting into a single source of truth, so finance runs on clean, real-time numbers.",
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

export type Industry = { name: string; img: string };

export const industries: Industry[] = [
  { name: "Associations", img: "/Associations.avif" },
  { name: "Nonprofits", img: "/Nonprofits.avif" },
  { name: "Professional", img: "/Professional.avif" },
  { name: "Healthcare", img: "/Healthcare.avif" },
  { name: "Real Estate", img: "/Real%20Estate.avif" },
  { name: "Financial Services", img: "/Financial%20Services.avif" },
  { name: "Education", img: "/Education.avif" },
  { name: "Manufacturing", img: "/Manufacturing.avif" },
];

export type WhyCard = {
  num: string;
  title: string;
  body: string;
  x: number;
  y: number;
  rot: number;
};

export const whyData: WhyCard[] = [
  { num: "01", title: "Business-First", body: "We begin with goals, challenges, users, and expected outcomes before recommending a platform or solution.", x: 597, y: 12, rot: -6 },
  { num: "02", title: "Cross-Platform Expertise", body: "Our capabilities span AI, CRM, cloud, marketing automation, financial systems, and association management.", x: 48, y: 108, rot: 6 },
  { num: "03", title: "Practical Solutions", body: "We focus on solutions that can be implemented, adopted, measured, secured, and maintained.", x: 578, y: 362, rot: -6 },
  { num: "04", title: "Long-Term Partnership", body: "We provide ongoing administration, optimization, training, and support after launch.", x: 48, y: 458, rot: 6 },
];

export type ProcessStep = { num: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Discovery", body: "We learn your goals, challenges, users, and current systems before recommending anything." },
  { num: "02", title: "Strategy", body: "We map the platforms, integrations, and roadmap that fit your business." },
  { num: "03", title: "Design", body: "We design the workflows, data models, and experience behind the solution." },
  { num: "04", title: "Implementation", body: "We build and configure the platforms, automations, and integrations." },
  { num: "05", title: "Testing", body: "We validate functionality, security, and performance before go-live." },
  { num: "06", title: "Launch", body: "We deploy the solution and support your team through go-live." },
  { num: "07", title: "Support", body: "We provide ongoing administration, optimization, and Managed Support." },
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
    a: "Klaudio LLC is an AI and technology consulting firm that helps organizations choose, implement, and run the systems they depend on. Its services are AI automation, revenue operations (Salesforce, HubSpot, GoHighLevel, Klaviyo, and paid funnels), AWS cloud, Shopify and VTEX ecommerce, and financial systems, with managed support after launch.",
  },
  {
    q: "Who does Klaudio LLC work with?",
    a: "Klaudio LLC works with associations, nonprofits, professional services firms, healthcare organizations, real estate firms, financial services companies, education providers, and manufacturers. Clients are typically organizations that need systems that work in daily operations rather than a strategy document.",
  },
  {
    q: "Where is Klaudio LLC based?",
    a: "Klaudio LLC was founded in 2026 and is registered in Alaska, with its office at 821 N St, Suite 102, Anchorage, AK 99501. The team works with clients remotely across the United States and internationally.",
  },
  {
    q: "How does a Klaudio LLC engagement work?",
    a: "Every engagement follows seven stages: Discovery, Strategy, Design, Implementation, Testing, Launch, and Support. Klaudio learns your goals and current systems before recommending any platform, and stays on after go-live to administer and improve what it built.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope: a single automation or integration is far smaller than a CRM rollout or a cloud migration. After discovery you receive a written roadmap with milestones and delivery dates, before any build work starts.",
  },
  {
    q: "Can Klaudio LLC work with our existing CRM, marketing, and finance platforms?",
    a: "Yes. Klaudio integrates with the CRM, ERP, accounting, ecommerce, payment, and marketing platforms you already use, including Salesforce, HubSpot, GoHighLevel, Klaviyo, Meta Ads, Shopify, and VTEX. Where a system does not need replacing, it gets connected instead, so the whole stack works as one.",
  },
  {
    q: "Can Klaudio LLC help with AWS cloud migration or cost optimization?",
    a: "Yes. Klaudio assesses your current environment, plans and runs workload and database migrations, and sets up infrastructure as code, CI/CD pipelines, security controls, backups, and disaster recovery. For environments already on AWS, it runs well-architected reviews and cost optimization.",
  },
  {
    q: "What makes Klaudio LLC different from other AI consultancies?",
    a: "Klaudio starts from the business problem rather than a platform, and one team covers AI, CRM, cloud, ecommerce, and financial systems, so integrations are not split across vendors. It only recommends what your team can adopt and maintain, and it stays after launch with administration, optimization, and training.",
  },
];
