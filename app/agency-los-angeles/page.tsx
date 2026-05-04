import type { Metadata } from "next";
import LocationPageLayout, { LocationPageData } from "@/components/location/LocationPageLayout";

export const metadata: Metadata = {
  title: "Website Development Agency Los Angeles | RankFlow",
  description:
    "RankFlow builds AI-first websites and apps for Los Angeles startups, creators, DTC brands, and entertainment-adjacent companies. Designed to rank in AI search and convert. Fixed price. Full ownership.",
  keywords: [
    "website development agency Los Angeles",
    "web development Los Angeles",
    "LA web agency",
    "Los Angeles startup web design",
    "creator economy web development LA",
    "DTC brand website LA",
    "AI web agency Los Angeles",
    "Next.js agency LA",
  ],
  alternates: {
    canonical: "https://rankflow.in/web-development-agency-los-angeles",
  },
  openGraph: {
    title: "Website Development Agency Los Angeles | RankFlow",
    description:
      "AI-first web development for LA startups, creators, and DTC brands. Fixed price. Full ownership. Book a free call.",
    url: "https://rankflow.in/web-development-agency-los-angeles",
    images: [{ url: "/og-img.png", width: 1200, height: 630, alt: "RankFlow – Web Development Agency Los Angeles" }],
  },
};

const losAngelesData: LocationPageData = {
  city: "Los Angeles",

  hero: {
    badge: "Now working with LA founders & creators",
    headline:
      "LA runs on stories, audiences, and attention. Your website should capture all three.",
    subheadline:
      "From Venice Beach DTC brands to Hollywood-adjacent tech companies — we build websites and AI-powered products that look exceptional, rank in AI search, and convert the traffic you're already driving. No templates. No cookie-cutter agencies.",
    availability: "Limited Q2 2026 project slots · PT-compatible calls.",
  },

  services: [
    {
      id: "landing-pages",
      label: "Landing Pages",
      heading:
        "Your LA audience searches differently now. ChatGPT is the new Google.",
      subheading:
        "The entertainment and creator economy in LA moves through word-of-mouth, social recommendations, and increasingly — AI-generated answers. We build landing pages engineered to be cited by ChatGPT, Claude, and Perplexity, not just indexed by Google. Supporting content clusters, entity mapping, and structured data ensure your brand is the answer, not just a result.",
      pills: [
        "AEO + GEO optimised",
        "Creator-economy copywriting",
        "Schema & structured data",
        "Conversion-first UX",
        "7–14 day delivery",
        "Mobile-first design",
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
        "LA's creative economy needs products that move as fast as the culture does.",
      subheading:
        "Whether you're building a platform for creators, a DTC commerce experience, or a fan-engagement app for an entertainment brand — we ship production-ready products from Figma through to app store submission. Real-time progress in Slack, weekly staging reviews, and a PT-compatible call schedule. You own everything at the end.",
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
            "Auth, database & cloud deployment",
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
          name: "Platform / SaaS",
          price: "Custom",
          duration: "Scoped · from $10,000",
          features: [
            "Multi-role auth + creator dashboards",
            "Payment + monetisation integrations",
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
        "Your LA audience expects 24/7 engagement. An AI chatbot that actually sounds like you delivers it.",
      subheading:
        "LA's consumer and creator brands live and die by audience trust. Generic AI chatbots break that trust instantly. We train chatbots on your specific brand voice, product catalogue, and customer journey — so it feels like an extension of your team, not a help widget from 2018. WhatsApp, Instagram DM integration, and CRM sync available.",
      pills: [
        "Brand-voice trained",
        "WhatsApp & web widget",
        "Instagram DM integration",
        "Lead capture flows",
        "CRM integration",
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
            "Trained on your brand content",
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
            "Lead gen + support deflection",
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
            "Multi-language + multi-platform",
            "Deep CRM / commerce integration",
            "Private cloud or on-premise",
            "SLA + dedicated support",
          ],
          buttonText: "Book a call",
          isPopular: false,
        },
      ],
    },
  ],

  processHeading: "Creative industries move fast. Our process was built for that.",
  processSubheading:
    "We've worked with brands where the launch window is a cultural moment. We know how to move without cutting corners.",
  processSteps: [
    {
      title: "Scoped in 48 hours.",
      description:
        "One discovery call produces a clear brief and a fixed-price proposal — so you know the budget, timeline, and every deliverable before the project starts. No revision-gate surprises at the end.",
      highlight: "Fixed scope · No surprises",
    },
    {
      title: "You see it as it's built.",
      description:
        "Live staging links and Figma previews at every milestone. PT-time calls are available in the mornings or evenings. We work async-first so LA's creative schedule doesn't need to adapt to ours.",
      highlight: "PT-compatible · Real-time staging",
    },
    {
      title: "Everything shipped to you.",
      description:
        "Full source code, environment credentials, and documentation handed over on delivery. You can take it to any developer, any host, at any time. We don't hold your product hostage.",
      highlight: "100% IP ownership",
    },
  ],
  assuranceTitle: "LA creative brands need a studio that gets culture — and code.",
  assuranceBody:
    "We've seen what a beautiful product with poor engineering does to a brand launch. And we've seen what a technically solid product with mediocre design does to conversion. We don't compromise on either — because in LA, both matter.",

  faqs: [
    {
      question: "Do you work with creator economy companies and influencer brands?",
      answer:
        "Yes — frequently. We've built platforms, landing pages, and commerce experiences for brands that live at the intersection of content and commerce. We understand the specific UX patterns that work for creator audiences.",
    },
    {
      question: "Can you match the visual quality that LA brands typically demand?",
      answer:
        "That's our baseline. We build in Figma before we write a line of code, and we present every major design decision with reasoning. If you have an existing brand identity, we extend it faithfully. If you're starting fresh, we develop a visual direction before design begins.",
    },
    {
      question: "We need to launch around a cultural moment or campaign. Can you hit a tight deadline?",
      answer:
        "Sometimes yes, sometimes no — and we'll tell you honestly which it is. If the timeline is genuinely achievable, we'll commit to it. If it isn't, we'd rather say that upfront than miss a launch that's tied to a campaign.",
    },
    {
      question: "Can you integrate with Shopify, Klaviyo, or other DTC tools?",
      answer:
        "Yes. Shopify headless, Klaviyo, Meta Pixel, TikTok Pixel, and most DTC tooling is well within our scope. We'll document all integrations and make sure your marketing team can manage them post-launch.",
    },
    {
      question: "Do you handle app store submissions for iOS and Android?",
      answer:
        "Yes. We handle the entire submission process including store listing copywriting, screenshots, and ASO (App Store Optimisation). We've submitted apps to both the App Store and Google Play and understand the review requirements.",
    },
    {
      question: "Do you do branding or just development?",
      answer:
        "We do UX/UI design as part of our development process, which includes visual direction and component design. We don't offer standalone brand strategy or logo design — but if you already have a brand identity, we'll design and build faithfully within it.",
    },
  ],

  ctaHeadline: "Ready to build something LA actually talks about?",
  ctaSubline:
    "Book a free 30-minute call. We'll scope your project, give you a straight price, and tell you honestly what's achievable in your timeline.",
  localSignal: "PT-compatible · Working with LA founders & creative brands",
};

export default function LosAngelesPage() {
  return <LocationPageLayout data={losAngelesData} />;
}
