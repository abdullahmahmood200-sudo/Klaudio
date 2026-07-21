export type Service = { title: string; blurb: string };

export const services: Service[] = [
  {
    title: "AI & Automation",
    blurb:
      "Deploy intelligent agents and workflow automation that take on the repetitive work, freeing your team to focus on the decisions that actually move revenue.",
  },
  {
    title: "CRM & Marketing",
    blurb:
      "Unify your customer data and automate campaigns across every channel, so more conversations turn into closed, repeatable revenue.",
  },
  {
    title: "Cloud",
    blurb:
      "Migrate, scale, and secure your infrastructure on modern cloud platforms engineered for speed, resilience, and predictable cost.",
  },
  {
    title: "Financial Systems",
    blurb:
      "Connect billing, accounting, and reporting into a single source of truth, so finance runs on clean, real-time numbers.",
  },
  {
    title: "Managed Services & Integrations",
    blurb:
      "Keep everything running and connected with proactive support and custom integrations across your entire stack.",
  },
];

export type NavItem = { label: string; href: string; active?: boolean };

export const navItems: NavItem[] = [
  { label: "Services", href: "#services", active: true },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "/contact" },
];

export type Industry = { name: string; img: string };

export const industries: Industry[] = [
  { name: "Associations", img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Nonprofits", img: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Professional", img: "https://images.pexels.com/photos/30004365/pexels-photo-30004365.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Healthcare", img: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Real Estate", img: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Financial Services", img: "https://images.pexels.com/photos/31650949/pexels-photo-31650949.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Education", img: "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=700" },
  { name: "Manufacturing", img: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=700" },
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
