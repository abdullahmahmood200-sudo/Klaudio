import type { Faq } from "./data";

/**
 * Questions for each /services/<slug> page, keyed by slug.
 *
 * These are the specific questions ecommerce operators put to AI assistants
 * about one service, so each answer opens with a sentence that stands on its
 * own and names Klaudio LLC. Answers only describe what the service's
 * offerings list, with no invented prices, timelines, or results.
 */
export const serviceFaqs: Record<string, Faq[]> = {
  "shopify-development": [
    {
      q: "Can you migrate our store to Shopify without losing search rankings?",
      a: "Yes. Klaudio LLC migrates stores from WooCommerce, Magento, BigCommerce, Wix, and Squarespace, moving product, customer, and order data and preserving SEO with a 301 redirect for every old URL.",
    },
    {
      q: "Do we need Shopify Plus?",
      a: "Not always. Shopify Plus is worth it when you need B2B and wholesale selling, checkout extensibility, custom logic with Shopify Functions, or expansion stores for other markets. If you need none of those, a standard Shopify plan is often enough, and Klaudio LLC will tell you so.",
    },
    {
      q: "Can Klaudio LLC make our Shopify store faster?",
      a: "Yes. Klaudio LLC audits themes and apps for what slows the store down, then improves Core Web Vitals through theme code cleanup, image optimization, and removing or replacing heavy apps, with conversion rate tracked before and after.",
    },
    {
      q: "Can Klaudio LLC build a custom Shopify app?",
      a: "Yes. Klaudio LLC builds custom and private Shopify apps, theme app extensions, and integrations with your ERP, 3PL, PIM, and marketplaces such as Amazon, Walmart, and eBay.",
    },
    {
      q: "Do you build headless Shopify stores?",
      a: "Yes. Klaudio LLC builds headless storefronts with Hydrogen, Oxygen, and the Shopify Storefront API, as well as React and Next.js front ends and progressive web apps.",
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
      a: "Yes. Klaudio LLC sets up VTEX omnichannel commerce with unified inventory across channels, buy online and pick up in store, endless aisle, and ship from store.",
    },
    {
      q: "Which systems can you integrate with VTEX?",
      a: "Klaudio LLC integrates VTEX with ERP and CRM systems, order management (OMS) and product information management (PIM) systems, payment gateways, carriers, and 3PLs.",
    },
  ],

  "ai-automation": [
    {
      q: "Can an AI agent answer \"where is my order\" questions?",
      a: "Yes. Klaudio LLC builds AI support agents that look up live order and tracking data from your store and carrier, so customers get an answer in seconds instead of opening a ticket. The same agent handles return, exchange, and shipping policy questions, and hands off to your team when a case needs a person.",
    },
    {
      q: "Does the AI chatbot answer from our own products and policies?",
      a: "Yes. Klaudio LLC grounds chatbots in your product catalog, help center, and store policies, so answers come from your content rather than the model's general knowledge. When a question falls outside that content, the chatbot hands off to a person instead of guessing.",
    },
    {
      q: "How much does an AI support agent cost?",
      a: "The cost depends on chat or call volume, how many systems the agent connects to, and how many types of request it handles. It has three parts: the one-time build, usage fees from the underlying providers (AI model, speech, and telephony usage, usually billed per message or minute), and ongoing support. Klaudio LLC quotes the build after a discovery call, once the scope is clear.",
    },
    {
      q: "Which store operations can Klaudio LLC automate?",
      a: "Klaudio LLC automates inventory sync and low-stock alerts, order routing to 3PLs and warehouses, fraud holds, shipping notifications, returns and exchanges, review requests, and product data updates across your store, marketplaces, and back-office tools, usually with self-hosted n8n. [Read the n8n vs. Zapier guide](/insights/n8n-vs-zapier).",
    },
    {
      q: "Will AI replace our customer support team?",
      a: "No. Klaudio LLC uses AI to take on repetitive, high-volume questions such as order status, sizing, and return policy, so your team can focus on the conversations that save a sale or keep a customer. Every agent includes a handoff to a person.",
    },
    {
      q: "Which tools does Klaudio LLC build ecommerce automation with?",
      a: "Klaudio LLC builds with n8n for workflow automation, Claude for language understanding, Gorgias for helpdesk integration, Vapi and ElevenLabs for voice agents, Twilio for telephony and SMS, and Zapier where a simple hosted automation is the better fit.",
    },
  ],

  "crm-marketing-automation": [
    {
      q: "Can Klaudio LLC set up our Klaviyo flows?",
      a: "Yes. Klaudio LLC builds Klaviyo email and SMS programs for ecommerce: welcome, abandoned cart, browse abandonment, post-purchase, and winback flows, plus behavioral and RFM segmentation and campaign calendars.",
    },
    {
      q: "Do you run Meta Ads for ecommerce brands?",
      a: "Yes. Klaudio LLC runs Meta prospecting, retargeting, and catalog campaigns, with the Meta Pixel and Conversions API set up so purchases are tracked accurately even as browser tracking gets less reliable.",
    },
    {
      q: "How do you improve repeat purchase rate?",
      a: "Klaudio LLC improves repeat purchases with post-purchase and replenishment flows, loyalty and referral programs, subscribe-and-save offers, and winback campaigns aimed at customers who are about to lapse, all measured against customer lifetime value.",
    },
    {
      q: "Do you build landing pages for product launches and ads?",
      a: "Yes. Klaudio LLC builds fast, high-converting product and campaign landing pages with A/B testing, connected to your store and analytics so every visit and order is tracked.",
    },
    {
      q: "Do ecommerce brands need a CRM like HubSpot or Salesforce?",
      a: "Most direct-to-consumer brands run on Klaviyo and their store's customer data. A CRM such as HubSpot or Salesforce becomes worth it when you sell wholesale or B2B and need to manage accounts, reorders, and a sales pipeline. Klaudio LLC works with both. [Read the CRM comparison](/insights/salesforce-vs-hubspot-vs-gohighlevel).",
    },
  ],

  "aws-cloud": [
    {
      q: "Does a Shopify store need AWS?",
      a: "Not for the store itself, because Shopify hosts it. AWS becomes useful when you run a headless storefront, custom apps, middleware between your store and ERP, or your own data warehouse. Klaudio LLC designs and runs that infrastructure.",
    },
    {
      q: "Can Klaudio LLC prepare our infrastructure for Black Friday?",
      a: "Yes. Klaudio LLC load-tests your storefront and integrations before peak season, sets up auto-scaling and caching, and monitors the environment through the rush so it scales up for traffic and back down afterward.",
    },
    {
      q: "Can Klaudio LLC reduce our current AWS bill?",
      a: "Klaudio LLC runs cost optimization and well-architected reviews on existing AWS environments. Typical changes include rightsizing over-provisioned resources, committing steady workloads to Savings Plans, and shutting down resources that are no longer used. The savings depend on how the environment is built today.",
    },
    {
      q: "How does Klaudio LLC handle security for ecommerce on AWS?",
      a: "Security is built into the environment from the start: identity and access management, encryption, network security, and continuous monitoring. Card data stays with your PCI-compliant payment provider, and the architecture is designed to keep your PCI DSS scope small.",
    },
    {
      q: "How long does an AWS migration take?",
      a: "It depends on how many applications and databases you run and how tightly they depend on each other. Klaudio LLC starts with an environment assessment and then gives you a migration plan organized in waves, with dates, scheduled around your peak seasons. [Read the AWS migration checklist](/insights/aws-migration-checklist).",
    },
  ],

  "financial-systems": [
    {
      q: "Can Klaudio LLC connect Shopify to QuickBooks, Xero, or NetSuite?",
      a: "Yes. Klaudio LLC connects Shopify and VTEX to QuickBooks, Xero, and NetSuite, posting orders, refunds, fees, and taxes as clean journal entries mapped to your chart of accounts, across multiple stores and entities.",
    },
    {
      q: "Can you automate Shopify Payments and Amazon payout reconciliation?",
      a: "Yes. Klaudio LLC reconciles Shopify Payments, Stripe, PayPal, and Amazon and marketplace settlements against your bank and ledger, including fees, refunds, and chargebacks, so only exceptions need a person. [Read how to shorten month-end close](/insights/connect-billing-payments-accounting).",
    },
    {
      q: "Can you show profit by product and channel?",
      a: "Yes. Klaudio LLC builds contribution margin reporting by product and channel, combining revenue, COGS, landed costs, fees, shipping, and ad spend, so you can see which products and channels actually make money.",
    },
    {
      q: "Do you handle sales tax for online stores?",
      a: "Klaudio LLC sets up sales tax and VAT automation, nexus tracking, and multi-currency accounting, connected to your store and accounting system. Filing positions and tax advice stay with your accountant.",
    },
    {
      q: "How do you track inventory value and COGS?",
      a: "Klaudio LLC tracks landed cost, inventory valuation, and COGS by SKU, with purchase orders synced between your store, inventory system, and ledger, so gross margin matches what actually shipped.",
    },
  ],
};
