/**
 * Content for the /services page.
 *
 * Sourced from the client's Salesforce/AWS content doc plus the Shopify, VTEX,
 * and FAQ docs. The source bullet lists were trimmed hard: each platform keeps
 * the offerings that describe distinct work, and the near-identical
 * Shopify/VTEX bullets (migrations, headless, SEO, managed services) were
 * split so the two panels don't read as the same page twice.
 */

export type Offering = { title: string; items: string[] };

export type Platform = {
  key: string;
  /** URL segment for the service's own page at /services/<slug>. */
  slug: string;
  /** Title for that page — phrased the way someone would search for it. */
  seoTitle: string;
  /** Meta description for that page. The blurb is prose; this is the summary. */
  metaDescription: string;
  title: string;
  sub: string;
  img: string;
  headline: string;
  blurb: string;
  offerings: Offering[];
  /** Optional pill row under the offerings (Salesforce clouds). */
  extra?: { label: string; items: string[] };
};

export const platforms: Platform[] = [
  {
    key: "ai",
    slug: "ai-automation",
    seoTitle: "AI Automation Services | Voice Agents, Chatbots & n8n",
    metaDescription:
      "AI voice agents, document-grounded chatbots, and self-hosted n8n workflows built on your own systems, with human handoff where it matters. Klaudio designs, builds, and runs them.",
    title: "AI & Automation",
    sub: "Voice agents, chatbots, n8n",
    img: "/Ai%20&%20Automation.avif",
    headline: "AI agents that carry real workload",
    blurb:
      "Voice agents that answer and make calls, chatbots that qualify and support, and n8n workflows that move the data between them, built on your systems, with a human handoff wherever it matters.",
    offerings: [
      {
        title: "AI Voice Operators",
        items: [
          "AI receptionist for inbound calls",
          "AI SDRs for outbound prospecting",
          "Personal AI agents for scheduling & tasks",
        ],
      },
      {
        title: "Online Booking & Appointment Reminders",
        items: [
          "Self-serve online booking",
          "Automated appointment reminders",
          "Synced to your calendar & CRM",
        ],
      },
      {
        title: "Invoicing & Payment Reminders",
        items: [
          "Automated invoice generation",
          "Payment reminder sequences",
          "Synced with your accounting system",
        ],
      },
      {
        title: "Lead Capture & Instant Follow-Up",
        items: [
          "Forms that capture leads 24/7",
          "Instant automated follow-up",
          "Lead routing into your CRM",
        ],
      },
      {
        title: "Email & SMS Marketing Sequences",
        items: [
          "Automated drip campaigns",
          "SMS follow-up sequences",
          "Synced with your CRM & customer data",
        ],
      },
      {
        title: "AI Customer Support Chatbots",
        items: [
          "Always-on customer support",
          "Answers grounded in your docs",
          "Escalation to a live agent",
        ],
      },
      {
        title: "Automated Payroll & Tax Filing",
        items: [
          "Automated payroll runs",
          "Tax calculation & filing",
          "Compliance-ready records",
        ],
      },
      {
        title: "Inventory Tracking & Low-Stock Alerts",
        items: [
          "Real-time inventory tracking",
          "Low-stock alerts",
          "Synced across sales channels",
        ],
      },
      {
        title: "Review & Feedback Collection",
        items: [
          "Automated review requests",
          "Feedback form follow-ups",
          "Reputation monitoring",
        ],
      },
      {
        title: "Cross-Platform Data Syncing",
        items: [
          "Two-way sync across CRM, billing & marketing tools",
          "Eliminates manual re-entry",
          "Compliant handling of customer data",
        ],
      },
    ],
    extra: {
      label: "Tools we build on",
      items: ["n8n", "Claude", "Vapi", "ElevenLabs", "Twilio", "Zapier"],
    },
  },
  {
    key: "crm",
    slug: "crm-marketing-automation",
    seoTitle: "Revenue Operations | Salesforce, GHL, HubSpot & Klaviyo",
    metaDescription:
      "Revenue operations built on the platform that fits: Salesforce CRM, GoHighLevel, HubSpot, Meta Ads, and Klaviyo, connected to animated web builds so pipelines, paid funnels, and lifecycle campaigns run off one system.",
    title: "Revenue Operations",
    sub: "Salesforce, GHL, HubSpot, Meta, Klaviyo",
    img: "/CRM%20&%20Marketing.avif",
    headline: "One customer record, campaigns that follow it",
    blurb:
      "Whether you're on Salesforce, GoHighLevel, or HubSpot, we build the CRM, paid funnel, and lifecycle systems that sales and marketing teams actually use, then automate the journeys, scoring, and reporting that turn more conversations into repeatable revenue.",
    offerings: [
      {
        title: "Salesforce CRM Integration & Management",
        items: [
          "Custom pipeline architecture",
          "Enterprise data sync",
          "Sales team enablement",
        ],
      },
      {
        title: "GoHighLevel (GHL) All-in-One Engine",
        items: [
          "Unified communication inbox",
          "Automated missed-call text-back",
          "Local lead conversion systems",
        ],
      },
      {
        title: "HubSpot Revenue Architecture",
        items: [
          "Inbound lead capture",
          "Deal pipeline tracking",
          "Automated multi-channel email workflows",
        ],
      },
      {
        title: "Meta Ads & Paid Funnels",
        items: [
          "Paid traffic campaigns",
          "High-converting lead forms",
          "Pixel & CAPI tracking setup",
        ],
      },
      {
        title: "Animated Web Development",
        items: [
          "Modern, high-performance builds",
          "Interactive animations",
          "Fast load times",
        ],
      },
      {
        title: "Klaviyo Retention & Lifecycle Marketing",
        items: [
          "Automated revenue flows",
          "Behavioral segmentation",
          "Customer retention campaigns",
        ],
      },
    ],
    extra: {
      label: "Platforms we work with",
      items: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "GoHighLevel",
        "HubSpot",
        "Meta Ads",
        "Klaviyo",
        "GA4",
      ],
    },
  },
  {
    key: "aws",
    slug: "aws-cloud",
    seoTitle: "AWS Cloud Consulting, Migration & DevOps",
    metaDescription:
      "AWS cloud consulting, migration, DevOps, security, and managed services. Klaudio designs and runs environments that cut operational cost and stay resilient as you scale.",
    title: "AWS Cloud",
    sub: "Migration, DevOps, modernization",
    img: "/Cloud.avif",
    headline: "Cloud solutions that scale with your business",
    blurb:
      "From cloud consulting and migration to DevOps, security, and managed services, we design and run AWS environments that improve agility, reduce operational cost, and stay resilient as you grow.",
    offerings: [
      {
        title: "Consulting & migration",
        items: [
          "Cloud strategy",
          "Environment assessment",
          "Workload migration",
          "Database migration",
        ],
      },
      {
        title: "Infrastructure & architecture",
        items: [
          "Scalable architecture",
          "High availability",
          "Well-architected reviews",
          "Cost optimization",
        ],
      },
      {
        title: "DevOps & CI/CD",
        items: [
          "Deployment pipelines",
          "Infrastructure as code",
          "Containers",
          "Continuous integration",
        ],
      },
      {
        title: "Application modernization",
        items: [
          "Serverless computing",
          "Microservices",
          "Containerization",
          "Legacy refactoring",
        ],
      },
      {
        title: "Security & compliance",
        items: [
          "Identity management",
          "Encryption",
          "Network security",
          "Continuous monitoring",
        ],
      },
      {
        title: "Data, backup & recovery",
        items: [
          "Analytics & AI services",
          "Automated backups",
          "Disaster recovery planning",
          "Proactive monitoring",
        ],
      },
    ],
  },
  {
    key: "shopify",
    slug: "shopify-development",
    seoTitle: "Shopify & Shopify Plus Development Agency",
    metaDescription:
      "Shopify and Shopify Plus storefronts, custom themes, private apps, migrations, headless builds, and ongoing managed support from a team that stays after launch.",
    title: "Shopify",
    sub: "Storefronts, themes, apps, Plus",
    img: "/Manufacturing.avif",
    headline: "Build, scale, and grow on Shopify",
    blurb:
      "Launching a new store, migrating from another platform, or extending an existing Shopify ecosystem, we build storefronts, themes, and apps that convert and keep loading fast.",
    offerings: [
      {
        title: "Store development",
        items: [
          "Setup & configuration",
          "Custom store development",
          "Product & collection management",
          "Payments & shipping",
          "Multi-currency & language",
        ],
      },
      {
        title: "Theme development",
        items: [
          "Custom themes",
          "Shopify 2.0",
          "Responsive UI/UX",
          "Speed optimization",
          "Accessibility",
        ],
      },
      {
        title: "App development",
        items: [
          "Private & public apps",
          "App extensions",
          "API development",
          "ERP & CRM integrations",
        ],
      },
      {
        title: "Headless commerce",
        items: [
          "Hydrogen development",
          "Storefront API",
          "React & Next.js",
          "Progressive web apps",
        ],
      },
      {
        title: "Shopify Plus",
        items: [
          "B2B & wholesale",
          "Multi-store management",
          "Checkout customization",
          "Shopify Flow & Functions",
        ],
      },
      {
        title: "Migrations",
        items: [
          "WooCommerce & Magento",
          "BigCommerce & Wix",
          "Product, customer & order data",
          "SEO preservation",
        ],
      },
    ],
  },
  {
    key: "vtex",
    slug: "vtex-commerce",
    seoTitle: "VTEX Commerce Implementation & Marketplace Builds",
    metaDescription:
      "VTEX implementation, unified commerce, marketplace and seller management, headless storefronts, and integrations with your ERP, payments, and fulfilment systems.",
    title: "VTEX",
    sub: "Unified commerce and marketplaces",
    img: "/Associations.avif",
    headline: "Unified commerce experiences with VTEX",
    blurb:
      "Launch a marketplace, modernize your platform, or go omnichannel. Our VTEX team delivers API-first commerce that connects online and offline channels on one inventory.",
    offerings: [
      {
        title: "Store development",
        items: [
          "Setup & configuration",
          "Catalog configuration",
          "Checkout customization",
          "Multi-language & currency",
        ],
      },
      {
        title: "Marketplace",
        items: [
          "Marketplace implementation",
          "Seller onboarding",
          "Vendor management",
          "Commission & order routing",
        ],
      },
      {
        title: "Headless & VTEX IO",
        items: [
          "VTEX IO apps",
          "Store framework customization",
          "React & Next.js",
          "Progressive web apps",
        ],
      },
      {
        title: "Omnichannel",
        items: [
          "Unified inventory",
          "Click & collect",
          "Endless aisle",
          "Store fulfillment",
        ],
      },
      {
        title: "Integrations",
        items: [
          "ERP & CRM",
          "OMS & PIM",
          "Payment gateways",
          "Shipping providers",
        ],
      },
      {
        title: "Migration & performance",
        items: [
          "Magento & Shopify to VTEX",
          "Catalog & order migration",
          "Core Web Vitals",
          "Conversion rate optimization",
        ],
      },
    ],
  },
  {
    key: "financial",
    slug: "financial-systems",
    seoTitle: "Financial Systems Consulting | Billing, ERP & Reporting",
    metaDescription:
      "Billing, ERP, and financial reporting systems that close on one set of numbers: revenue recognition, reconciliation, approval workflows, and finance integrations.",
    title: "Financial Systems",
    sub: "Billing, ERP, reporting",
    img: "/Financial%20Systems.avif",
    headline: "Finance running on one set of numbers",
    blurb:
      "Billing, accounting, payments, and reporting connected into a single source of truth, so the close is shorter, the reconciliation is automated, and the board deck matches the ledger.",
    offerings: [
      {
        title: "ERP & accounting integration",
        items: [
          "NetSuite, QuickBooks & Xero sync",
          "Chart of accounts mapping",
          "Journal entry automation",
          "Multi-entity consolidation",
        ],
      },
      {
        title: "Billing & subscriptions",
        items: [
          "Invoicing automation",
          "Subscription & usage billing",
          "Dunning & retries",
          "Revenue recognition",
        ],
      },
      {
        title: "Payments",
        items: [
          "Gateway integration",
          "Multi-currency support",
          "Automated reconciliation",
          "Fraud & risk rules",
        ],
      },
      {
        title: "Reporting & forecasting",
        items: [
          "Real-time finance dashboards",
          "Cash flow reporting",
          "Budget vs. actual",
          "Board & investor reporting",
        ],
      },
      {
        title: "Controls & compliance",
        items: [
          "Approval workflows",
          "Audit trails",
          "Role-based access",
          "Policy enforcement",
        ],
      },
      {
        title: "Data quality",
        items: [
          "Reconciliation automation",
          "Close checklists",
          "Anomaly alerts",
          "Historical data cleanup",
        ],
      },
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How can your solutions help our business grow?",
    a: "We streamline operations, cut manual cost, and improve customer experience, so the technology you already pay for starts supporting growth instead of absorbing it.",
  },
  // "Existing systems" and "timelines" live in the homepage FAQ; these two
  // cover different ground so the pages do not repeat each other.
  {
    q: "How do we get started?",
    a: "Book a free consultation through the contact page. The first step is a discovery call about your goals, your current systems, and what good looks like, and you receive a roadmap with milestones before any build work starts.",
  },
  {
    q: "Which service should we start with?",
    a: "Start with the problem costing you the most time or revenue. If you are not sure which that is, discovery identifies it, and the right first step is sometimes a single automation or integration rather than a full platform change.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Security is part of the build, not a final check: secure coding standards, encryption, access controls, regular assessments, and compliance with the regulations that apply to you.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Post-launch support covers monitoring, performance optimization, bug fixes, security updates, and ongoing enhancements.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Fixed price projects, dedicated teams, time and material, staff augmentation, and fully managed services, whichever fits how your team wants to work.",
  },
];
