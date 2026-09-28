import type { Article } from "../types";

const article: Article = {
  slug: "aws-migration-checklist",
  title: "AWS Migration Checklist for Small IT Teams",
  description:
    "A step-by-step AWS migration checklist for small IT teams: assessment, the 7 Rs of migration strategy, account and security foundations, migration waves, and optimization after the move.",
  published: "2026-09-28",
  updated: "2026-09-28",
  services: ["aws-cloud"],
  intro:
    "A successful AWS migration for a small team comes down to three things: knowing exactly what you run today, choosing the right migration strategy for each workload, and moving in small waves you can roll back. This checklist covers assessment, strategy, the AWS foundation, the migration itself, and the optimization work that makes the move pay off.",
  takeaways: [
    "Inventory everything first: applications, servers, databases, and the dependencies between them.",
    "Pick a strategy per workload using the 7 Rs. Not everything should move, and not everything should be rebuilt.",
    "Set up accounts, identity, logging, and budgets before migrating the first workload.",
    "Savings come after the move, from rightsizing, commitments, and switching off what you no longer need.",
  ],
  sections: [
    {
      heading: "What should you do before migrating to AWS?",
      answer:
        "Build a complete picture of what you run today and define what success means. Most migration problems come from a dependency nobody knew about or a goal nobody wrote down.",
      body: [
        {
          ol: [
            "**Inventory** every application, server, database, and scheduled job.",
            "**Map dependencies:** which systems talk to which, including file shares, integrations, and licensing servers.",
            "**Measure utilization** of CPU, memory, and storage, so you size cloud resources on real usage rather than current hardware.",
            "**Name an owner** for each application who can approve changes and test it after the move.",
            "**Record compliance requirements** such as data residency, retention, or industry rules.",
            "**Define success:** cost targets, performance targets, and a date for retiring the old environment.",
            "**Estimate cost** with the AWS Pricing Calculator, based on the measured utilization.",
          ],
        },
      ],
    },
    {
      heading: "What are the 7 Rs of cloud migration?",
      answer:
        "The 7 Rs are the strategies AWS uses to classify how each workload should be handled: retire, retain, rehost, relocate, replatform, repurchase, or refactor. Assigning one to every workload turns a vague migration into a concrete plan.",
      body: [
        {
          table: {
            head: ["Strategy", "What it means", "When to use it"],
            rows: [
              ["Retire", "Switch it off", "Nobody uses it, or another system already covers it"],
              ["Retain", "Leave it where it is for now", "It is hard to move, or it is due for replacement anyway"],
              ["Rehost", "Move it as is (lift and shift)", "You need to move quickly with little change"],
              ["Relocate", "Move a whole virtualized environment without changing it", "You run VMware and want to move it wholesale"],
              ["Replatform", "Move with small improvements", "For example, moving a self-managed database to Amazon RDS"],
              ["Repurchase", "Replace it with a SaaS product", "A commercial service does the job better than your own install"],
              ["Refactor", "Re-architect it for the cloud", "The application needs to scale, or is costly to run as it is"],
            ],
          },
        },
        {
          p: "Small teams usually get the best return from retiring aggressively, rehosting or replatforming most workloads, and refactoring only the one or two applications where it clearly pays.",
        },
      ],
    },
    {
      heading: "How should you set up the AWS foundation?",
      answer:
        "Set up the accounts, identity, network, logging, and cost controls before moving any workload. Fixing these after the migration is far harder than getting them right at the start.",
      body: [
        {
          ul: [
            "**Separate accounts** for production, non-production, and shared services, managed with AWS Organizations or AWS Control Tower.",
            "**Central identity** through IAM Identity Center, with multi-factor authentication for everyone and the root user locked away.",
            "**Network design** with planned VPCs and address ranges, and a secure connection to any systems that stay on premises.",
            "**Logging** with AWS CloudTrail turned on across all accounts from day one.",
            "**Budgets and alerts** so unexpected spend is caught within days, not at the end of the month.",
            "**Infrastructure as code** with CloudFormation, the AWS CDK, or Terraform, so environments can be rebuilt and reviewed.",
            "**Tagging rules** for owner, environment, and cost center, applied from the first resource.",
          ],
        },
      ],
    },
    {
      heading: "How do you run the migration itself?",
      answer:
        "Migrate in waves, starting with a low-risk workload as a pilot. Each wave should have a tested rollback plan, an agreed cutover window, and sign-off from the application owner.",
      body: [
        {
          ol: [
            "Pilot with a low-risk workload to prove the process and the foundation.",
            "Group the remaining workloads into waves by dependency, so connected systems move together.",
            "Use AWS Database Migration Service to replicate databases and keep downtime short.",
            "Write a rollback plan for every wave and rehearse it.",
            "Cut over in an agreed window, then have the owner test the application.",
            "Keep the old environment available until each wave is confirmed stable.",
          ],
        },
      ],
    },
    {
      heading: "What should you do after migrating?",
      answer:
        "Optimize. Most of the savings from a cloud migration come after the move, from sizing resources to real usage, committing to steady workloads, and switching off what is no longer needed.",
      body: [
        {
          ul: [
            "Rightsize instances and databases using the utilization data you now have.",
            "Cover steady workloads with Savings Plans or Reserved Instances.",
            "Schedule non-production environments to shut down outside working hours.",
            "Test restores from backup, not just the backups themselves, for example with AWS Backup.",
            "Set up monitoring and alarms in Amazon CloudWatch.",
            "Run an AWS Well-Architected review once the environment has settled.",
          ],
        },
      ],
    },
    {
      heading: "What are the most common AWS migration mistakes?",
      answer:
        "The most common mistakes are lifting and shifting everything while expecting instant savings, skipping the security and cost foundation, and never testing backups. Each one is cheap to avoid and expensive to fix later.",
      body: [
        {
          ul: [
            "Moving oversized servers as they are and paying cloud prices for idle capacity.",
            "Forgetting data transfer costs between regions, services, and the internet.",
            "Launching resources without tags, which makes costs impossible to attribute.",
            "Migrating an application without an owner to test it and accept it.",
            "Assuming backups work without ever restoring one.",
          ],
        },
        {
          p: "Klaudio LLC plans and runs AWS migrations and manages the environments afterwards. See [AWS Cloud services](/services/aws-cloud).",
        },
      ],
    },
  ],
};

export default article;
