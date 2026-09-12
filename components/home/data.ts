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
    title: "CRM & Marketing",
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
  {
    title: "Managed Services",
    slug: "managed-services",
    blurb:
      "Keep everything running and connected with proactive support and custom integrations across your entire stack.",
    img: "/Managed%20services.avif",
  },
];

export type NavItem = { label: string; href: string; active?: boolean };

export const navItems: NavItem[] = [
  { label: "Home", href: "/", active: true },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "#about" },
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
