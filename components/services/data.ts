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
    title: "AI & Automation",
    sub: "Voice agents, chatbots, n8n",
    img: "/Ai%20&%20Automation.avif",
    headline: "AI agents that carry real workload",
    blurb:
      "Voice agents that answer and make calls, chatbots that qualify and support, and n8n workflows that move the data between them — built on your systems, with a human handoff wherever it matters.",
    offerings: [
      {
        title: "AI voice agents",
        items: [
          "Inbound call handling",
          "Outbound follow-up & reminders",
          "Appointment booking",
          "CRM logging & call summaries",
          "Live handoff to your team",
        ],
      },
      {
        title: "Chatbots & assistants",
        items: [
          "Website & WhatsApp chat",
          "Answers grounded in your docs",
          "Lead qualification & routing",
          "Multilingual support",
          "Escalation to live agents",
        ],
      },
      {
        title: "n8n automations",
        items: [
          "Self-hosted n8n setup",
          "Workflow design & custom nodes",
          "API & webhook orchestration",
          "Scheduled jobs & data sync",
          "Error handling & retries",
        ],
      },
      {
        title: "Process automation",
        items: [
          "Document & invoice processing",
          "Email and ticket triage",
          "Approval workflows",
          "Human-in-the-loop review",
        ],
      },
      {
        title: "Data & integrations",
        items: [
          "CRM & ERP connections",
          "Knowledge base pipelines",
          "Vector search setup",
          "Analytics & reporting hooks",
        ],
      },
      {
        title: "Operations & governance",
        items: [
          "Prompt & version management",
          "Quality evaluation",
          "Usage and cost monitoring",
          "PII handling & access controls",
        ],
      },
    ],
    extra: {
      label: "Tools we build on",
      items: ["n8n", "Claude", "Vapi", "ElevenLabs", "Twilio", "Zapier"],
    },
  },
  {
    key: "salesforce",
    title: "Salesforce",
    sub: "Consulting to managed services",
    img: "/Professional.avif",
    headline: "End-to-end Salesforce services",
    blurb:
      "Whether you're adopting Salesforce for the first time or optimizing an existing ecosystem, our certified experts build CRM that sales, service, and marketing teams actually use — and keep evolving it after go-live.",
    offerings: [
      {
        title: "Consulting",
        items: [
          "Business process analysis",
          "Roadmap planning",
          "Solution architecture",
          "License advisory",
        ],
      },
      {
        title: "Implementation",
        items: [
          "Setup & data model",
          "Security & user management",
          "Automation",
          "Reports & dashboards",
          "User training",
        ],
      },
      {
        title: "Customization",
        items: [
          "Custom objects",
          "Apex development",
          "Lightning components",
          "Flow automation",
          "Approval processes",
        ],
      },
      {
        title: "Integration",
        items: [
          "API & middleware",
          "Real-time synchronization",
          "ERP & ecommerce systems",
          "Legacy system connectivity",
        ],
      },
      {
        title: "Data migration",
        items: [
          "Data assessment",
          "Cleansing & mapping",
          "Migration execution",
          "Validation & testing",
        ],
      },
      {
        title: "Managed services",
        items: [
          "Production support",
          "Release management",
          "Performance optimization",
          "Continuous enhancements",
        ],
      },
    ],
    extra: {
      label: "Clouds we specialize in",
      items: [
        "Sales Cloud",
        "Service Cloud",
        "Marketing Cloud",
        "Commerce Cloud",
        "Experience Cloud",
        "Data Cloud",
      ],
    },
  },
  {
    key: "crm",
    title: "CRM & Marketing",
    sub: "Campaigns, lifecycle, attribution",
    img: "/CRM%20&%20Marketing.avif",
    headline: "One customer record, campaigns that follow it",
    blurb:
      "We unify customer data across your CRM and marketing tools, then automate the journeys, scoring, and reporting that turn more conversations into repeatable revenue.",
    offerings: [
      {
        title: "Marketing automation",
        items: [
          "Journey & campaign builds",
          "Lead scoring",
          "Nurture sequences",
          "Email & SMS templates",
        ],
      },
      {
        title: "CRM operations",
        items: [
          "Pipeline & stage design",
          "Data hygiene & deduplication",
          "Territory & assignment rules",
          "Sales dashboards",
        ],
      },
      {
        title: "Lifecycle & retention",
        items: [
          "Onboarding flows",
          "Win-back campaigns",
          "Loyalty programs",
          "Churn signals & alerts",
        ],
      },
      {
        title: "Personalization",
        items: [
          "Segmentation",
          "Dynamic content",
          "A/B testing",
          "Product & content recommendations",
        ],
      },
      {
        title: "Analytics & attribution",
        items: [
          "Multi-touch attribution",
          "GA4 & consent setup",
          "Revenue reporting",
          "Campaign ROI dashboards",
        ],
      },
      {
        title: "Integrations",
        items: [
          "CRM to ecommerce",
          "Ad platform audiences",
          "Customer data platforms",
          "Support & billing systems",
        ],
      },
    ],
    extra: {
      label: "Platforms we work with",
      items: [
        "Salesforce Marketing Cloud",
        "HubSpot",
        "Klaviyo",
        "Mailchimp",
        "Braze",
        "GA4",
      ],
    },
  },
  {
    key: "aws",
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
    title: "Shopify",
    sub: "Storefronts, themes, apps, Plus",
    img: "/Manufacturing.avif",
    headline: "Build, scale, and grow on Shopify",
    blurb:
      "Launching a new store, migrating from another platform, or extending an existing Shopify ecosystem — we build storefronts, themes, and apps that convert and keep loading fast.",
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
    title: "Financial Systems",
    sub: "Billing, ERP, reporting",
    img: "/Financial%20Systems.avif",
    headline: "Finance running on one set of numbers",
    blurb:
      "Billing, accounting, payments, and reporting connected into a single source of truth — so the close is shorter, the reconciliation is automated, and the board deck matches the ledger.",
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
  {
    key: "managed",
    title: "Managed Services",
    sub: "Support and integrations",
    img: "/Managed%20services.avif",
    headline: "Keep everything running and connected",
    blurb:
      "Post-launch is where most platforms drift. We monitor, patch, integrate, and optimize your stack so the solution keeps earning its place in the business.",
    offerings: [
      {
        title: "Platform support",
        items: [
          "System monitoring",
          "Bug fixes & enhancements",
          "Platform upgrades",
          "Security updates",
        ],
      },
      {
        title: "Integrations",
        items: [
          "ERP & CRM",
          "Payment gateways",
          "Shipping providers",
          "Marketing automation",
        ],
      },
      {
        title: "Performance",
        items: [
          "Core Web Vitals",
          "Speed optimization",
          "Technical SEO",
          "Conversion rate optimization",
        ],
      },
      {
        title: "Engagement models",
        items: [
          "Fixed price projects",
          "Dedicated teams",
          "Time & material",
          "Staff augmentation",
        ],
      },
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How can your solutions help our business grow?",
    a: "We streamline operations, cut manual cost, and improve customer experience — so the technology you already pay for starts supporting growth instead of absorbing it.",
  },
  {
    q: "Can you work with our existing systems?",
    a: "Yes. We integrate new solutions with your current CRM, ERP, cloud platforms, ecommerce systems, payment gateways, and third-party applications so the stack behaves as one ecosystem.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines depend on scope. After a discovery phase we hand you a roadmap with milestones, estimated timelines, and delivery dates before any build starts.",
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
    a: "Fixed price projects, dedicated teams, time and material, staff augmentation, and fully managed services — whichever fits how your team wants to work.",
  },
];
