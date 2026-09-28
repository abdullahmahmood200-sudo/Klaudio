import type { Faq } from "./data";

/**
 * Questions for each /services/<slug> page, keyed by slug.
 *
 * These are the specific questions people put to AI assistants about one
 * service, so each answer opens with a sentence that stands on its own and
 * names Klaudio LLC. Answers only describe what the service's offerings list,
 * with no invented prices, timelines, or results.
 */
export const serviceFaqs: Record<string, Faq[]> = {
  "ai-automation": [
    {
      q: "How much does an AI voice agent or chatbot cost?",
      a: "The cost depends on call or chat volume, how many systems the agent connects to, and how many types of request it handles. It has three parts: the one-time build, usage fees from the underlying providers (telephony, speech, and AI model usage, usually billed per minute or per message), and ongoing support. Klaudio LLC quotes the build after a discovery call, once the scope is clear.",
    },
    {
      q: "Can the chatbot answer from our own documents?",
      a: "Yes. Klaudio LLC builds chatbots grounded in your own documents, policies, and knowledge base, so answers come from your content rather than the model's general knowledge. When a question falls outside that content, the chatbot hands off to a person instead of guessing.",
    },
    {
      q: "Will an AI agent replace our staff?",
      a: "No. Klaudio LLC uses AI agents to take on repetitive, high-volume work such as routine calls, booking, follow-ups, and data entry, with a human handoff wherever judgment matters. The aim is to free your team for the decisions that actually move revenue.",
    },
    {
      q: "Do you host and maintain the n8n workflows?",
      a: "Yes. Klaudio LLC deploys self-hosted n8n and maintains it after launch: updates, backups, monitoring, and fixing workflows that fail. Self-hosting keeps your data on infrastructure you control and avoids per-task pricing as volumes grow. [Read the n8n vs. Zapier guide](/insights/n8n-vs-zapier).",
    },
    {
      q: "Which tools does Klaudio LLC build AI automation with?",
      a: "Klaudio LLC builds with n8n for workflow automation, Claude for language understanding, Vapi for voice agent orchestration, ElevenLabs for speech, Twilio for telephony, and Zapier where a simple hosted automation is the better fit.",
    },
  ],

  "crm-marketing-automation": [
    {
      q: "Which CRM should we use: Salesforce, HubSpot, or GoHighLevel?",
      a: "It depends on your sales process. Salesforce fits complex, multi-team processes that need deep customization, HubSpot fits inbound-led teams that want marketing and sales in one easy tool, and GoHighLevel fits local and service businesses that need fast lead follow-up. Klaudio LLC works with all three, so the recommendation follows your process. [Read the full comparison](/insights/salesforce-vs-hubspot-vs-gohighlevel).",
    },
    {
      q: "Can Klaudio LLC manage our Salesforce after launch?",
      a: "Yes. Klaudio LLC provides ongoing Salesforce management: pipeline changes, data sync with your other systems, user support, and sales team enablement, so the CRM keeps matching how your team actually sells.",
    },
    {
      q: "Do you run paid ads as well as set up the CRM?",
      a: "Yes. Klaudio LLC runs Meta Ads campaigns with lead forms and Pixel and Conversions API tracking, connected to your CRM so each lead can be followed from the ad click to the closed deal.",
    },
    {
      q: "Do you build websites and landing pages?",
      a: "Yes. Klaudio LLC builds modern, high-performance websites and landing pages with interactive animation and fast load times, connected to your CRM so every form fill becomes a tracked lead.",
    },
    {
      q: "Can you set up email and SMS automation?",
      a: "Yes. Klaudio LLC builds lifecycle programs in Klaviyo, HubSpot, and GoHighLevel: behavioral segmentation, automated revenue flows, multi-channel email workflows, and retention campaigns.",
    },
  ],

  "aws-cloud": [
    {
      q: "How long does an AWS migration take?",
      a: "It depends on how many applications and databases you run and how tightly they depend on each other. Klaudio LLC starts with an environment assessment and then gives you a migration plan organized in waves, with dates, before anything moves. [Read the AWS migration checklist](/insights/aws-migration-checklist).",
    },
    {
      q: "Can Klaudio LLC reduce our current AWS bill?",
      a: "Klaudio LLC runs cost optimization and well-architected reviews on existing AWS environments. Typical changes include rightsizing over-provisioned resources, committing steady workloads to Savings Plans, and shutting down resources that are no longer used. The savings depend on how the environment is built today.",
    },
    {
      q: "Do you manage AWS environments after migration?",
      a: "Yes. Klaudio LLC provides managed services after migration: proactive monitoring, automated backups, disaster recovery planning, security updates, and ongoing optimization.",
    },
    {
      q: "How does Klaudio LLC handle security on AWS?",
      a: "Security is built into the environment from the start: identity and access management, encryption, network security, and continuous monitoring, aligned with the compliance requirements that apply to your organization.",
    },
    {
      q: "Do you use infrastructure as code?",
      a: "Yes. Klaudio LLC defines environments as infrastructure as code and deploys through CI/CD pipelines, so infrastructure can be reviewed, repeated, and rebuilt reliably, including with containers where they fit.",
    },
  ],

  "shopify-development": [
    {
      q: "Can you migrate our store to Shopify without losing search rankings?",
      a: "Yes. Klaudio LLC migrates stores from WooCommerce, Magento, BigCommerce, and Wix, moving product, customer, and order data and preserving SEO with a redirect for every old URL.",
    },
    {
      q: "Do we need Shopify Plus?",
      a: "Not always. Shopify Plus is worth it when you need B2B and wholesale selling, deeper checkout customization, custom logic with Shopify Functions, or several stores under one organization. If you need none of those, a standard Shopify plan is often enough, and Klaudio LLC will tell you so.",
    },
    {
      q: "Can Klaudio LLC build a custom Shopify app?",
      a: "Yes. Klaudio LLC builds private and public Shopify apps, app extensions, and API integrations, including connections to your ERP and CRM.",
    },
    {
      q: "Do you build headless Shopify stores?",
      a: "Yes. Klaudio LLC builds headless storefronts with Hydrogen and the Shopify Storefront API, as well as React and Next.js front ends and progressive web apps.",
    },
    {
      q: "Should we choose Shopify Plus or VTEX?",
      a: "Shopify Plus is usually the faster, simpler choice for brands selling their own products direct and wholesale. VTEX suits marketplaces with third-party sellers, many stores or countries, and unified online and in-store inventory. [Read the full comparison](/insights/shopify-plus-vs-vtex).",
    },
  ],

  "vtex-commerce": [
    {
      q: "Can Klaudio LLC build a marketplace on VTEX?",
      a: "Yes. Klaudio LLC implements VTEX marketplaces, including seller onboarding, vendor management, commission rules, and order routing between sellers.",
    },
    {
      q: "Can you migrate our store from Magento or Shopify to VTEX?",
      a: "Yes. Klaudio LLC migrates stores from Magento and Shopify to VTEX, including catalog and order data, and tunes the new store for Core Web Vitals and conversion rate.",
    },
    {
      q: "What is VTEX IO?",
      a: "VTEX IO is VTEX's development platform for building apps and customizing storefronts. Klaudio LLC builds VTEX IO apps and customizes the store framework, and also builds headless storefronts in React and Next.js.",
    },
    {
      q: "Can VTEX connect online and in-store inventory?",
      a: "Yes. Klaudio LLC sets up VTEX omnichannel commerce with unified inventory across channels, click and collect, endless aisle, and fulfillment from physical stores.",
    },
    {
      q: "Which systems can you integrate with VTEX?",
      a: "Klaudio LLC integrates VTEX with ERP and CRM systems, order management (OMS) and product information management (PIM) systems, payment gateways, and shipping providers.",
    },
  ],

  "financial-systems": [
    {
      q: "Which accounting and ERP systems does Klaudio LLC work with?",
      a: "Klaudio LLC integrates NetSuite, QuickBooks, and Xero with your billing, payment, and CRM systems, including chart of accounts mapping, journal entry automation, and multi-entity consolidation.",
    },
    {
      q: "Can you automate payment reconciliation?",
      a: "Yes. Klaudio LLC automates reconciliation between your payment gateways, bank, billing system, and ledger, so only exceptions need a person, and adds anomaly alerts and close checklists. [Read how to shorten month-end close](/insights/connect-billing-payments-accounting).",
    },
    {
      q: "Do you handle subscription and usage-based billing?",
      a: "Yes. Klaudio LLC sets up invoicing automation, subscription and usage billing, dunning and payment retries, and revenue recognition.",
    },
    {
      q: "Can you build finance dashboards and board reporting?",
      a: "Yes. Klaudio LLC builds real-time finance dashboards, cash flow reporting, budget versus actual views, and board and investor reporting from the same numbers as your ledger.",
    },
    {
      q: "How do you keep financial controls in place when automating?",
      a: "Klaudio LLC builds controls into the automation: approval workflows, audit trails, role-based access, and policy enforcement, so every automated entry can be traced back to its source.",
    },
  ],
};
