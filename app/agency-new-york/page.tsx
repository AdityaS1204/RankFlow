import type { Metadata } from "next";
import LocationPageLayout, { LocationPageData } from "@/components/location/LocationPageLayout";

export const metadata: Metadata = {
  title: "Website Development Agency New York | RankFlow",
  description:
    "RankFlow builds AI-first websites and web apps for US startups, B2B SaaS companies, and media brands. AEO-optimised, fast to ship, and fully owned by you. Book a free scoping call.",
  keywords: [
    "website development agency",
    "web development",
    "web agency",
    "startup web design",
    "B2B SaaS web development",
    "AEO agency",
    "Next.js agency",
    "AI web development",
  ],
  alternates: {
    canonical: "https://rankflow.in/web-development-agency-new-york",
  },
  openGraph: {
    title: "Website Development Agency New York | RankFlow",
    description:
      "AI-first web development for NYC startups, B2B SaaS, and media companies. Fixed price. No lock-in. Book a free call today.",
    url: "https://rankflow.in/web-development-agency-new-york",
    images: [{ url: "/og-img.png", width: 1200, height: 630, alt: "RankFlow – Web Development Agency New York" }],
  },
};

const newYorkData: LocationPageData = {
  city: "USA",

  hero: {
    badge: "Now working with NYC founders & operators",
    headline:
      "New York moves at its own speed. Your website should keep up.",
    subheadline:
      "NYC's B2B companies, media brands, and venture-backed startups don't have patience for slow agencies. We scope in 48 hours, ship in weeks — not quarters — and hand you a product that earns citations in AI search and converts enterprise buyers.",
    availability: "Limited Q2 2026 project slots · ET-compatible calls.",
  },

  services: [
    {
      id: "landing-pages",
      label: "Landing Pages",
      heading:
        "Your buyers are asking AI before they Google. Are you the answer they get?",

      subheading:
        "Enterprise buyers in New York don't start vendor discovery on page one of Google anymore — they ask ChatGPT and Perplexity. We engineer landing pages specifically for AI citation: entity-mapped, schema-rich, and supported by a content cluster that builds topical authority. Your brand shows up where the shortlist gets made.",
      pills: [
        "AEO + entity optimisation",
        "Schema & structured data",
        "B2B-focused copywriting",
        "Enterprise buyer language",
        "7–14 day delivery",
        "Core Web Vitals optimised",
      ],
      stats: [
        { value: "1-2 wk", label: "Typical delivery" },
        { value: "100%", label: "Source code yours" },
        { value: "7 days", label: "Post-launch revisions" },
      ],
      cards: [
        {
          name: "Dev / Design",
          price: "$1,100",
          duration: "One-time · 10 days",
          features: [
            "1 AEO landing page",
            "4 supporting blog articles",
            "Schema markup & structured data",
            "1 revision round",
          ],
          buttonText: "Get started",
          isPopular: false,
        },
        {
          name: "Pro",
          price: "$2,125",
          duration: "One-time · 16 days",
          features: [
            "1 AEO landing page (custom design)",
            "5 AI-optimised blog articles",
            "Topic cluster + entity mapping",
            "Core Web Vitals audit",
            "2 revisions + 30-day support",
          ],
          buttonText: "Get started",
          isPopular: true,
        },
        {
          name: "AEO Retainer",
          price: "$95/mo",
          duration: "3-month min · 6 blogs/mo",
          features: [
            "6 AEO articles per month",
            "Monthly schema updates",
            "AI citation tracking",
            "Competitor citation gap analysis",
          ],
          buttonText: "Learn more",
          isPopular: false,
        },
      ],
    },
    {
      id: "ai-apps",
      label: "Web & App Development",
      heading:
        "Manhattan-grade product polish. Without the Manhattan-grade agency invoice.",
      subheading:
        "New York's top-tier investors and enterprise clients spot a half-baked product immediately. We build full-stack web apps and mobile products from a rigorous UX/UI foundation — with real-time staging links, daily progress in Slack, and QA testing that mirrors real-world conditions. Everything ships with full documentation and IP transfer.",
      pills: [
        "Figma UX/UI design",
        "Next.js / React",
        "React Native / Flutter",
        "iOS + Android",
        "QA + device testing",
        "App Store submission",
      ],
      stats: [
        { value: "6–10 wk", label: "Typical delivery" },
        { value: "100%", label: "Source code yours" },
        { value: "60 days", label: "Post-launch support" },
      ],
      cards: [
        {
          name: "Web App",
          price: "$3,500",
          duration: "One-time · ~6 weeks",
          features: [
            "Full UX/UI design (Figma)",
            "Next.js frontend + API layer",
            "Auth, database & deployment",
            "60-day bug fix support",
          ],
          buttonText: "Get started",
          isPopular: false,
        },
        {
          name: "Mobile App + Stores",
          price: "$4,500",
          duration: "One-time · ~9 weeks",
          features: [
            "Full UX/UI design",
            "iOS + Android (15+ screens)",
            "Play Store + App Store submission",
            "ASO-optimised listings",
            "60-day bug fix support",
          ],
          buttonText: "Get started",
          isPopular: true,
        },
        {
          name: "Enterprise / SaaS",
          price: "Custom",
          duration: "Scoped · from $10,000",
          features: [
            "Multi-role auth + admin dashboards",
            "Payment + third-party integrations",
            "Security & load testing",
            "Dedicated PM + Slack access",
          ],
          buttonText: "Book a scoping call",
          isPopular: false,
        },
      ],
    },
    {
      id: "chatbots",
      label: "AI Chatbots",
      heading:
        "Enterprise buyers expect instant answers. Give them exactly that.",
      subheading:
        "B2B buyers and high-intent leads don't fill out forms and wait three business days. We build custom AI chatbots trained on your specific product knowledge and sales playbook — not generic templates. They qualify inbound leads, deflect repetitive support tickets, and route only the right conversations to your team. Integrates with HubSpot, Salesforce, Intercom, and Zendesk.",
      pills: [
        "Trained on your data",
        "Salesforce & HubSpot",
        "Intercom & Zendesk",
        "Human handoff logic",
        "Lead qualification flows",
        "Monthly retraining",
      ],
      stats: [
        { value: "1-2 wk", label: "Typical delivery" },
        { value: "100%", label: "Source code yours" },
        { value: "20 days", label: "Post-launch support" },
      ],
      cards: [
        {
          name: "Lead Gen Bot",
          price: "$1,800",
          duration: "Setup + $150/mo",
          features: [
            "Trained on your content",
            "Lead capture + qualification",
            "HubSpot / Salesforce push",
            "Website embed",
          ],
          buttonText: "Get started",
          isPopular: false,
        },
        {
          name: "Support + Lead Bot",
          price: "$3,200",
          duration: "Setup + $250/mo",
          features: [
            "Lead gen + ticket deflection",
            "CRM + helpdesk integration",
            "WhatsApp + web widget",
            "Human escalation logic",
            "Monthly retraining",
          ],
          buttonText: "Get started",
          isPopular: true,
          popularLabel: "Best value",
        },
        {
          name: "Enterprise Bot",
          price: "Custom",
          duration: "",
          features: [
            "Multi-language support",
            "Deep Salesforce / ERP integration",
            "Private cloud or on-premise",
            "SLA + dedicated support",
          ],
          buttonText: "Book a call",
          isPopular: false,
        },
      ],
    },
  ],

  processHeading: "No ambiguity. No agency theatre. Just shipped.",
  processSubheading:
    "NYC founders have been burned by agencies that over-promise. We've built our process specifically to prevent that.",
  processSteps: [
    {
      title: "Scoped and priced in 48 hours.",
      description:
        "One structured discovery call produces a fixed-price proposal with defined deliverables, a realistic timeline, and zero ambiguity. If we can't scope it cleanly, we tell you that before you sign anything.",
      highlight: "Fixed price · No scope creep",
    },
    {
      title: "Live progress. Every week.",
      description:
        "You get staging access and Figma previews at every major milestone — not a big reveal at the end. We sync over Slack daily and offer morning ET calls that work for New York schedules.",
      highlight: "ET-compatible · Daily updates",
    },
    {
      title: "Full handover. Nothing held back.",
      description:
        "Complete source code, environment credentials, and documentation on final payment. You can move to any dev team, any hosting provider, at any point. No retainer required to keep your own product running.",
      highlight: "100% IP transfer",
    },
  ],
  assuranceTitle: "The agency discipline NYC operators actually expect.",
  assuranceBody:
    "We treat every project with the same rigour you'd apply to a Series A company. Documented scope, structured milestones, Slack-first communication, and a clean handover — so your technical team can take it and run.",

  faqs: [
    {
      question: "Can you handle the timeline pressure that comes with a New York launch?",
      answer:
        "Yes. We run async-first and can compress timelines when there's a hard deadline. We scope what's realistic and tell you plainly if a timeline isn't achievable — better than a 'yes' that becomes a missed launch.",
    },
    {
      question: "Do you have experience with B2B SaaS companies specifically?",
      answer:
        "Heavily. Most of our web app projects are B2B-oriented — multi-role auth, admin dashboards, CRM integrations, and outbound sales tooling. We understand enterprise buyer UX expectations.",
    },
    {
      question: "Can you integrate with our existing sales stack — HubSpot, Salesforce, Outreach?",
      answer:
        "Yes. These integrations are standard for us. We'll scope the integration depth on the discovery call and build it into the fixed price — no surprise add-on invoices.",
    },
    {
      question: "Do you do equity deals or deferred payment for early-stage startups?",
      answer:
        "We don't take equity. We do offer milestone-based payment splits — typically 50% upfront and 50% on final delivery — which most founders find easier to manage than a single lump sum.",
    },
    {
      question: "What if we already have designs and just need development?",
      answer:
        "We take Figma files and ship production code. If your design is complete, we can skip the design phase entirely and move directly to development, which reduces both cost and time to launch.",
    },
    {
      question: "How is this different from hiring a NYC-based agency?",
      answer:
        "A local NYC agency typically charges 3–5× more for the same quality of output — because their overheads are priced in. We offer the same output quality with better async communication and a much faster path from scoping to launch.",
    },
  ],

  ctaHeadline: "Let's build something that respects your market.",
  ctaSubline:
    "Book a free 30-minute call. We'll give you a straight scope, a straight price, and a straight answer on timeline. No pitch decks. No sales reps.",
  localSignal: "ET-compatible · Working with NYC founders & operators",
};

export default function NewYorkPage() {
  return <LocationPageLayout data={newYorkData} />;
}
