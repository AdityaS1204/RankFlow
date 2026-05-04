import type { Metadata } from "next";
import LocationPageLayout, { LocationPageData } from "@/components/location/LocationPageLayout";

export const metadata: Metadata = {
  title: "Website Development Agency London | RankFlow",
  description:
    "RankFlow is an AI-first web development studio. We build high-performance websites, AI chatbots, and AEO-optimised landing pages for UK startups, fintechs, and scale-ups. Fixed price. Full source code. No lock-in.",
  keywords: [
    "website development agency",
    "web development",
    "AI web agency",
    "startup web design",
    "fintech web development",
    "AEO agency",
    "Next.js agency",
    "RankFlow",
  ],
  alternates: {
    canonical: "https://rankflow.in/web-development-agency",
  },
  openGraph: {
    title: "Website Development Agency UK | RankFlow",
    description:
      "AI-first web development for UK startups, fintechs & scale-ups. Fixed price. No lock-in. Book a free scoping call today.",
    url: "https://rankflow.in/web-development-agency",
    images: [{ url: "/og-img.png", width: 1200, height: 630, alt: "RankFlow – Web Development Agency" }],
  },
};

const londonData: LocationPageData = {
  city: "UK",

  hero: {
    badge: "Introducing our UI Library",
    headline:
      "Fastest-growing startups deserve a website that does more than look good.",
    subheadline:
      "From Shoreditch fintechs to City-adjacent B2B SaaS companies — we build AI-optimised web products that get cited in ChatGPT, rank on Google, and convert the visitors who actually matter. Fixed price. No retainer traps.",
    availability: "Limited project slots — Q2 2026.",
  },

  services: [
    {
      id: "landing-pages",
      label: "Landing Pages",
      heading:
        "Get your business cited by AI search — not just buried on page three of Google.",
      subheading:
        "The UK market is competitive and AI search is reshaping discovery fast. We build landing pages engineered for Answer Engine Optimisation (AEO) and GEO — so when a prospective client in the UK asks ChatGPT or Perplexity for recommendations, your brand comes up. Backed by structured data, entity mapping, and supporting content clusters.",
      pills: [
        "Figma → production code",
        "Schema + structured data",
        "GEO & AEO optimisation",
        "UK copywriting tone",
        "7–14 day delivery",
        "GDPR-compliant forms",
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
            "5 AI-optimised blogs",
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
            "6 AEO blogs/month",
            "Monthly schema updates",
            "AI citation tracking report",
            "Competitor citation analysis",
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
        "From wireframe to app store — we ship products, not prototypes.",
      subheading:
        "Full-stack app development from UX/UI design through to deployment, QA testing, and Play Store / App Store submission. We work in sprints and give you access throughout — no black-box builds.",
      pills: [
        "Figma UX/UI design",
        "React / Next.js",
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
            "Next.js frontend + API routes",
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
            "ASO-optimised store listings",
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
            "Multi-role auth + admin panel",
            "Payment + third-party integrations",
            "Load & security testing",
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
        "UK companies are automating support. Yours can do it without compromising on quality.",
      subheading:
        "Custom AI chatbots trained on your own documentation, tone of voice, and product knowledge — not a generic GPT wrapper. Integrated with your CRM, helpdesk, and WhatsApp Business. Qualifies leads, resolves common support queries, and escalates to your team only when it genuinely needs to. GDPR-aware by design.",
      pills: [
        "Trained on your data",
        "CRM & helpdesk integration",
        "WhatsApp Business",
        "Human handoff",
        "GDPR-compliant",
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
            "HubSpot CRM push",
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
            "WhatsApp Business + web widget",
            "Human handoff escalation",
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
            "Deep ERP / Salesforce integration",
            "Private cloud / on-premise deploy",
            "SLA + dedicated support",
          ],
          buttonText: "Book a call",
          isPopular: false,
        },
      ],
    },
  ],

  processHeading: "Fast enough for the UK market. Rigorous enough for your investors.",
  processSubheading:
    "We run lean, async-first sprints with daily updates — so you're never chasing your agency for a status report.",
  processSteps: [
    {
      title: "Scoped in 48 hours.",
      description:
        "One call, one detailed brief, one fixed price. We document every deliverable before a single line of code is written — so there are no surprise invoices at the end of the project.",
      highlight: "Fixed price · No surprises",
    },
    {
      title: "You review weekly.",
      description:
        "Access live staging links and Figma previews at every milestone. We operate across GMT and IST time zones — morning standups and evening reviews are both on the table.",
      highlight: "GMT-compatible workflow",
    },
    {
      title: "You own the final product.",
      description:
        "Full source code, deployment credentials, and documentation handed over on completion. No ongoing licences. No hosting lock-in. No dependency on us to keep the lights on.",
      highlight: "100% IP ownership",
    },
  ],
  assuranceTitle: "A remote studio that works like it's in your building.",
  assuranceBody:
    "We've deliberately built our process around the transparency that London-based founders and investors expect. Slack updates, weekly demos, structured docs — the same rigour you'd get from a senior in-house team, at a fraction of the cost.",

  faqs: [
    {
      question: "Do you work with UK-based companies specifically?",
      answer:
        "Yes — a significant portion of our clients are UK-based. We understand the UK market nuances: British English tone of voice, GDPR compliance requirements, and the expectations of London investors and enterprise procurement teams.",
    },
    {
      question: "Are your prices in USD or GBP?",
      answer:
        "We invoice in USD, but we're happy to provide GBP equivalents and can accept payment via international bank transfer or Wise. We don't charge conversion fees.",
    },
    {
      question: "How do you handle GDPR compliance in the websites you build?",
      answer:
        "Every site we build includes a proper consent management setup — cookie banners, privacy-first form handling, and no third-party pixels loaded without explicit consent. We flag anything that could create ICO exposure and can advise on data processing documentation.",
    },
    {
      question: "Can you build something that integrates with UK-specific tools like Xero or GoCardless?",
      answer:
        "Yes. We've integrated with Xero, Stripe, GoCardless, and a range of SaaS tools common in UK business workflows. Bring us your stack and we'll scope it properly.",
    },
    {
      question: "What's the time zone overlap for a London client?",
      answer:
        "India and the UK overlap by 4.5–5.5 hours depending on BST/GMT. In practice, this means morning check-ins your time work well. We're also available for async Slack communication throughout your working day.",
    },
    {
      question: "Do you sign NDAs before scoping?",
      answer:
        "Always. We sign a mutual NDA before any discovery conversation. Your product strategy and proprietary data stay confidential from the first call.",
    },
  ],

  ctaHeadline: "Ready to build something the UK will notice?",
  ctaSubline:
    "Book a free 30-minute call. We'll scope your project, answer every question honestly, and tell you if we're the right fit — no pitch deck, no pressure.",
  localSignal: "Working with UK founders · GMT-compatible",
};

export default function LondonPage() {
  return <LocationPageLayout data={londonData} />;
}
