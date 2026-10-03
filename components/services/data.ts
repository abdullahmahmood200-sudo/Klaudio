/**
 * Content for the /services page.
 *
 * Every service is framed for ecommerce brands, and the two commerce
 * platforms lead. Slugs predate the ecommerce focus and are kept so existing
 * links and rankings survive. The near-identical Shopify/VTEX bullets
 * (migrations, headless, SEO) are split so the two panels don't read as the
 * same page twice.
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
  /** Optional pill row under the offerings (tools and platforms). */
  extra?: { label: string; items: string[] };
};

export const platforms: Platform[] = [
  {
    key: "shopify",
    slug: "shopify-development",
    seoTitle: "Shopify & Shopify Plus Development Agency for Ecommerce Brands",
    metaDescription:
      "Shopify and Shopify Plus development for ecommerce brands: custom themes, apps, headless Hydrogen storefronts, B2B, replatforming from WooCommerce or Magento, and conversion-focused support after launch.",
    title: "Shopify",
    sub: "Storefronts, themes, apps, Plus",
    img: "/industries/online-store.avif",
    headline: "Build, scale, and grow on Shopify",
    blurb:
      "Launching a new brand, replatforming from WooCommerce or Magento, or scaling on Shopify Plus, we build storefronts, themes, and apps that load fast, convert on mobile, and keep working through peak season.",
    offerings: [
      {
        title: "Store development",
        items: [
          "Store setup & configuration",
          "Product, variant & collection setup",
          "Payments, shipping & taxes",
          "Multi-currency & Shopify Markets",
          "Subscriptions & bundles",
        ],
      },
      {
        title: "Theme development",
        items: [
          "Custom Online Store 2.0 themes",
          "Mobile-first product & collection pages",
          "Speed & Core Web Vitals",
          "Accessibility",
          "Conversion rate optimization",
        ],
      },
      {
        title: "App development & integrations",
        items: [
          "Custom & private apps",
          "Theme app extensions",
          "ERP, 3PL & PIM integrations",
          "Marketplace sync (Amazon, TikTok Shop, Walmart)",
        ],
      },
      {
        title: "Headless commerce",
        items: [
          "Hydrogen & Oxygen",
          "Storefront API",
          "React & Next.js front ends",
          "Progressive web apps",
        ],
      },
      {
        title: "Shopify Plus",
        items: [
          "B2B & wholesale ordering portals",
          "Multi-store & expansion stores",
          "Checkout extensibility",
          "Shopify Flow & Functions",
        ],
      },
      {
        title: "Replatforming",
        items: [
          "WooCommerce & Magento",
          "BigCommerce, Wix & Squarespace",
          "Product, customer & order data",
          "301 redirects & SEO preservation",
        ],
      },
    ],
  },
  {
    key: "vtex",
    slug: "vtex-commerce",
    seoTitle: "VTEX Commerce Implementation, Marketplaces & Omnichannel",
    metaDescription:
      "VTEX implementation for retailers and marketplaces: seller management, headless VTEX IO storefronts, unified online and in-store inventory, and integrations with your ERP, payments, and fulfillment.",
    title: "VTEX",
    sub: "Marketplaces and omnichannel retail",
    img: "/industries/warehouse.avif",
    headline: "Unified commerce and marketplaces on VTEX",
    blurb:
      "Launch a marketplace, bring your stores and online sales onto one inventory, or modernize an enterprise catalog. Our VTEX team delivers API-first commerce that connects every channel you sell through.",
    offerings: [
      {
        title: "Store development",
        items: [
          "Setup & configuration",
          "Catalog & SKU architecture",
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
          "Buy online, pick up in store",
          "Endless aisle",
          "Ship from store",
        ],
      },
      {
        title: "Integrations",
        items: [
          "ERP & CRM",
          "OMS & PIM",
          "Payment gateways",
          "Carriers & 3PLs",
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
    key: "ai",
    slug: "ai-automation",
    seoTitle: "AI Automation for Ecommerce | Support Agents, Chatbots & n8n",
    metaDescription:
      "AI support agents that answer order-status, shipping, and return questions, plus n8n automations for inventory, fulfillment, returns, and reviews. Klaudio builds and runs them for ecommerce brands.",
    title: "AI & Automation",
    sub: "Support agents, chatbots, n8n",
    img: "/Ai%20&%20Automation.avif",
    headline: "AI that runs the busywork behind your store",
    blurb:
      "AI agents that answer \"where is my order\" before it becomes a ticket, and n8n workflows that move orders, inventory, and customer data between your store, your 3PL, and the rest of your stack, with a human handoff wherever it matters.",
    offerings: [
      {
        title: "AI Customer Support Agents",
        items: [
          "Order status & tracking answers",
          "Returns, exchanges & shipping policy",
          "Grounded in your catalog & help center",
          "Handoff to your support team",
        ],
      },
      {
        title: "AI Shopping Assistants",
        items: [
          "Product recommendations & sizing help",
          "Pre-purchase questions on product pages",
          "Bundle & upsell suggestions",
        ],
      },
      {
        title: "AI Voice Agents",
        items: [
          "Inbound order & support calls",
          "Phone orders & reorders",
          "Callbacks for abandoned carts",
        ],
      },
      {
        title: "Catalog & Content Automation",
        items: [
          "AI product descriptions & SEO copy",
          "Bulk product data cleanup",
          "Image alt text & tagging",
        ],
      },
      {
        title: "Inventory & Low-Stock Alerts",
        items: [
          "Real-time stock sync across channels",
          "Low-stock & reorder alerts",
          "Back-in-stock notifications",
        ],
      },
      {
        title: "Order & Fulfillment Automation",
        items: [
          "Order routing to 3PLs & warehouses",
          "Fraud & high-risk order holds",
          "Shipping & delay notifications",
        ],
      },
      {
        title: "Returns & Exchanges",
        items: [
          "Self-serve return requests",
          "Automated labels & refunds",
          "Exchange-first flows that save revenue",
        ],
      },
      {
        title: "Review & UGC Collection",
        items: [
          "Post-purchase review requests",
          "Photo & video review follow-ups",
          "Negative review alerts",
        ],
      },
      {
        title: "Cross-Platform Data Syncing",
        items: [
          "Two-way sync across store, ERP & marketing tools",
          "Amazon & TikTok Shop order and listing sync",
          "No more manual CSV exports",
        ],
      },
    ],
    extra: {
      label: "Tools we build on",
      items: ["n8n", "Claude", "Gorgias", "Vapi", "ElevenLabs", "Twilio", "Zapier"],
    },
  },
  {
    key: "crm",
    slug: "crm-marketing-automation",
    seoTitle: "Ecommerce Growth & Retention Marketing | Klaviyo, Meta Ads & CRO",
    metaDescription:
      "Ecommerce growth and retention marketing: Klaviyo email and SMS flows, Meta Ads with Pixel and Conversions API tracking, high-converting landing pages, and HubSpot or Salesforce for B2B and wholesale.",
    title: "Growth & Retention",
    sub: "Klaviyo, Meta Ads, CRO, CRM",
    img: "/Growth%20&%20Retention.avif",
    headline: "Turn first orders into repeat customers",
    blurb:
      "We build the acquisition and retention engine behind your store: paid social with tracking you can trust, landing pages that convert, and Klaviyo flows that bring customers back, so growth comes from lifetime value, not just ad spend.",
    offerings: [
      {
        title: "Klaviyo Email & SMS",
        items: [
          "Welcome, abandoned cart & browse flows",
          "Post-purchase & winback flows",
          "Behavioral & RFM segmentation",
          "Campaign calendars",
        ],
      },
      {
        title: "Meta Ads & Paid Social",
        items: [
          "Prospecting & retargeting campaigns",
          "Catalog & dynamic product ads",
          "Pixel & Conversions API setup",
        ],
      },
      {
        title: "Landing Pages & CRO",
        items: [
          "High-converting product landing pages",
          "A/B testing",
          "Fast, animated builds",
        ],
      },
      {
        title: "Analytics & Attribution",
        items: [
          "GA4 ecommerce tracking",
          "Server-side tracking",
          "Customer lifetime value reporting",
        ],
      },
      {
        title: "Loyalty & Subscriptions",
        items: [
          "Loyalty & referral programs",
          "Subscribe-and-save offers",
          "Churn & winback campaigns",
        ],
      },
      {
        title: "B2B & Wholesale CRM",
        items: [
          "HubSpot & Salesforce for wholesale accounts",
          "Store-to-CRM data sync",
          "B2B ordering portals, pipeline & reorders",
        ],
      },
    ],
    extra: {
      label: "Platforms we work with",
      items: [
        "Klaviyo",
        "Meta Ads",
        "GA4",
        "Google Merchant Center",
        "HubSpot",
        "Salesforce",
        "GoHighLevel",
      ],
    },
  },
  {
    key: "aws",
    slug: "aws-cloud",
    seoTitle: "AWS Cloud for Ecommerce | Headless Hosting, Scaling & DevOps",
    metaDescription:
      "AWS cloud for ecommerce brands: hosting for headless storefronts and custom apps, auto-scaling for Black Friday traffic, data pipelines, DevOps, security, and cost optimization.",
    title: "AWS Cloud",
    sub: "Headless hosting, scaling, DevOps",
    img: "/Cloud.avif",
    headline: "Infrastructure that holds up on Black Friday",
    blurb:
      "When your store outgrows a single platform, with headless front ends, custom apps, middleware, or your own data warehouse, we design and run the AWS environment behind it so it scales for peak traffic and costs less the rest of the year.",
    offerings: [
      {
        title: "Headless & app hosting",
        items: [
          "Headless storefront hosting",
          "Custom Shopify & VTEX app backends",
          "CDN & edge caching",
          "Image & media delivery",
        ],
      },
      {
        title: "Peak traffic readiness",
        items: [
          "Auto-scaling architecture",
          "Load testing before BFCM",
          "High availability",
          "Cost optimization",
        ],
      },
      {
        title: "Commerce data & integrations",
        items: [
          "Order & inventory middleware",
          "Event-driven integrations",
          "Ecommerce data warehouse",
          "Analytics & AI services",
        ],
      },
      {
        title: "DevOps & CI/CD",
        items: [
          "Deployment pipelines",
          "Infrastructure as code",
          "Containers",
          "Preview environments",
        ],
      },
      {
        title: "Security & compliance",
        items: [
          "Identity management",
          "Encryption",
          "PCI DSS-aware architecture",
          "Continuous monitoring",
        ],
      },
      {
        title: "Migration, backup & recovery",
        items: [
          "Workload & database migration",
          "Automated backups",
          "Disaster recovery planning",
          "Proactive monitoring",
        ],
      },
    ],
  },
  {
    key: "financial",
    slug: "financial-systems",
    seoTitle: "Ecommerce Accounting Systems | Shopify to QuickBooks, Xero & NetSuite",
    metaDescription:
      "Ecommerce finance systems: Shopify, Amazon, Stripe, and PayPal payouts reconciled into QuickBooks, Xero, or NetSuite, with sales tax, COGS, inventory valuation, and margin reporting.",
    title: "Ecommerce Finance",
    sub: "Payouts, accounting, margins",
    img: "/Financial%20Systems.avif",
    headline: "Know your real margin on every order",
    blurb:
      "Store, marketplace, and payment data flowing into your accounting system automatically, so payouts reconcile themselves, sales tax is handled, and you can see profit by product and channel, not just revenue.",
    offerings: [
      {
        title: "Store-to-accounting integration",
        items: [
          "Shopify & VTEX to QuickBooks, Xero & NetSuite",
          "Order, refund & fee journal entries",
          "Chart of accounts mapping",
          "Multi-store & multi-entity consolidation",
        ],
      },
      {
        title: "Payout reconciliation",
        items: [
          "Shopify Payments, Stripe & PayPal",
          "Amazon & marketplace settlements",
          "Fees, refunds & chargebacks",
          "Automated bank matching",
        ],
      },
      {
        title: "Inventory & COGS",
        items: [
          "Landed cost tracking",
          "Inventory valuation",
          "COGS by SKU",
          "Purchase order sync",
        ],
      },
      {
        title: "Sales tax & compliance",
        items: [
          "Sales tax & VAT automation",
          "Nexus tracking",
          "Multi-currency accounting",
          "Audit trails",
        ],
      },
      {
        title: "Profit reporting",
        items: [
          "Contribution margin by product & channel",
          "Cash flow & inventory planning",
          "Real-time finance dashboards",
          "Investor & lender reporting",
        ],
      },
      {
        title: "Subscriptions & B2B billing",
        items: [
          "Subscription revenue tracking",
          "Wholesale invoicing & net terms",
          "Dunning & failed payment retries",
          "Revenue recognition",
        ],
      },
    ],
  },
];

/**
 * A card on the /services explorer. Most cards are one platform; the
 * Ecommerce card groups Shopify and VTEX, matching the homepage, and its
 * detail shows both platforms' offerings, each linking to its own page.
 */
export type ServiceCard = {
  key: string;
  title: string;
  sub: string;
  img: string;
  /** Drives the detail header. For a group, a synthesized summary platform. */
  platform: Platform;
  /** Set for a group: the platforms whose offerings the detail lists. */
  parts?: Platform[];
};

const byKey = (key: string) => platforms.find((p) => p.key === key)!;
const ECOMMERCE_KEYS = ["shopify", "vtex"];

export const serviceCards: ServiceCard[] = [
  {
    key: "ecommerce",
    title: "Ecommerce",
    sub: "Shopify, Shopify Plus, VTEX",
    img: "/CRM%20&%20Marketing.avif",
    platform: {
      ...byKey("shopify"),
      key: "ecommerce",
      title: "Ecommerce",
      headline: "Build, scale, and grow your online store",
      blurb:
        "Storefronts, apps, headless builds, marketplaces, and replatforming on Shopify and VTEX. We recommend the platform that fits your catalog and channels, then build a store that loads fast, converts on mobile, and holds up through peak season.",
      offerings: [],
      extra: undefined,
    },
    parts: ECOMMERCE_KEYS.map(byKey),
  },
  ...platforms
    .filter((p) => !ECOMMERCE_KEYS.includes(p.key))
    .map((p) => ({ key: p.key, title: p.title, sub: p.sub, img: p.img, platform: p })),
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How can your solutions help our store grow?",
    a: "We lift conversion rate, average order value, and repeat purchases, and we cut the manual work behind orders, inventory, and support, so the apps you already pay for start driving sales instead of absorbing time.",
  },
  // "Existing systems" and "timelines" live in the homepage FAQ; these two
  // cover different ground so the pages do not repeat each other.
  {
    q: "How do we get started?",
    a: "Book a free consultation through the contact page. The first step is a discovery call about your store, your current apps and integrations, and your growth goals, and you receive a roadmap with milestones before any build work starts.",
  },
  {
    q: "Which service should we start with?",
    a: "Start with the problem costing you the most sales or time, such as a slow storefront, a leaky checkout, or support tickets piling up. If you are not sure which that is, discovery identifies it, and the right first step is sometimes a single automation or integration rather than a full replatform.",
  },
  {
    q: "How do you handle data security and compliance?",
    a: "Security is part of the build, not a final check: secure coding standards, encryption, access controls, and regular assessments. Payments stay with PCI-compliant providers, and customer data is handled in line with the privacy rules that apply to you, such as GDPR and CCPA.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Post-launch support covers monitoring, speed and conversion optimization, bug fixes, app and security updates, and extra cover for peak seasons like Black Friday and Cyber Monday.",
  },
  {
    q: "What engagement models do you offer?",
    a: "Fixed price projects, dedicated teams, time and material, staff augmentation, and fully managed services, whichever fits how your team wants to work.",
  },
];
