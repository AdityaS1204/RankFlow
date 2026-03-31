"use client";

import React, { useState } from "react";
import { MdCheck, MdArrowOutward, MdAutoAwesome } from "react-icons/md";

interface PricingCard {
    name: string;
    price: string;
    duration: string;
    features: string[];
    buttonText: string;
    isPopular: boolean;
    popularLabel?: string;
}

interface ExtraCard {
    eyebrow: string;
    title: string;
    description: string;
    pills: string[];
    buttonText: string;
}

interface ServiceSection {
    id: string;
    label: string;
    heading: string;
    subheading: string;
    pills: string[];
    stats?: { value: string; label: string }[];
    cards: PricingCard[];
    extraCard?: ExtraCard;
}

const servicesData: ServiceSection[] = [
    {
        id: "landing-pages",
        label: "Landing Pages",
        heading: "Get cited in ChatGPT, Perplexity & Google AI — not just ranked on page one.",
        subheading: "We design and build landing pages engineered for Answer Engine Optimization (AEO) — so your brand shows up when AI answers your customer's questions. Paired with supporting blogs that build topical authority.",
        pills: ["Figma design → production code", "Schema + structured data","GEO", "AEO + entity mapping", "7–14 day delivery", "Mobile-first"],
         stats: [
            { value: "1-2 wk", label: "Typical delivery" },
            { value: "100%", label: "Source code yours" },
            { value: "7 days", label: "Post-launch revisions" }
        ],
        cards: [
            {
                name: "Dev/Design",
                price: "$995",
                duration: "One-time · 14 days",
                features: ["1 AEO landing page", "4 supporting blogs", "Schema markup", "1 revision round"],
                buttonText: "Get started",
                isPopular: false
            },
            {
                name: "Pro ",
                price: "$2,125",
                duration: "One-time · 21 days",
                features: ["1 AEO landing page (custom design)", "5 AI-optimized blogs", "Topic cluster + entity mapping", "Core Web Vitals audit", "2 revisions + 30-day support"],
                buttonText: "Get started",
                isPopular: true
            },
            {
                name: "AEO Retainer",
                price: "$105/mo",
                duration: "3-month min · 5 blogs/mo",
                features: ["5 AEO blogs/month", "Monthly schema updates", "AI citation tracking report", "Competitor citation analysis"],
                buttonText: "Learn more",
                isPopular: false
            }
        ]
    },
    {
        id: "ai-apps",
        label: "AI Apps",
        heading: "From wireframe to app store — we ship products, not prototypes.",
        subheading: "Full-stack app development from UX/UI design through to deployment, QA testing, and Play Store / App Store submission. We work in sprints and give you access throughout — no black-box builds.",
        pills: ["Figma design", "React Native / Flutter", "iOS + Android", "QA + device testing", "Store submission", "Backend + API"],
        stats: [
            { value: "6–10 wk", label: "Typical delivery" },
            { value: "100%", label: "Source code yours" },
            { value: "60 days", label: "Post-launch support" }
        ],
        cards: [
            {
                name: "Mobile App + Stores",
                price: "$4,500",
                duration: "One-time · ~10 weeks",
                features: ["Full UX/UI design", "iOS + Android (15+ screens)", "Play Store + App Store submission", "Store listing optimization (ASO)", "60-day bug fix support"],
                buttonText: "Get started",
                isPopular: true
            },
            {
                name: "Complex / SaaS",
                price: "Custom",
                duration: "Scoped · from $10,000",
                features: ["Multi-role auth + admin panel", "Payment + third-party integrations", "Load + security testing", "Dedicated PM + Slack access"],
                buttonText: "Learn more",
                isPopular: false
            }
        ]
    },
    {
        id: "chatbots",
        label: "AI Chatbots",
        heading: "Cut support costs by 60%. Capture leads while you sleep.",
        subheading: "Custom AI chatbots trained on your data — not generic templates. Integrated with your CRM, helpdesk, and WhatsApp. Resolves real queries, qualifies real leads, and hands off to humans only when it truly matters.",
        pills: ["Trained on your data", "CRM integration","Slack", "WhatsApp + web widget", "Human handoff", "Monthly retraining"],
         stats: [
            { value: "1-2 wk", label: "Typical delivery" },
            { value: "100%", label: "Source code yours" },
            { value: "20 days", label: "Post-launch support" }
        ],
        cards: [
            {
                name: "Lead Gen Bot",
                price: "$1,800",
                duration: "Setup + $150/mo",
                features: ["Trained on your content", "Lead capture + qualification", "Basic CRM push (HubSpot)", "Website embed"],
                buttonText: "Get started",
                isPopular: false
            },
            {
                name: "Support + Lead Bot",
                price: "$3,200",
                duration: "Setup + $250/mo",
                features: ["Lead gen + ticket deflection", "CRM + helpdesk integration", "WhatsApp + web widget", "Human handoff escalation", "Monthly retraining"],
                buttonText: "Get started",
                isPopular: true,
                popularLabel: "Best value"
            },
            {
                name: "Enterprise Bot",
                price: "Custom",
                duration: "",
                features: ["Multi-language support", "Deep ERP / Salesforce integration", "Private cloud / on-premise deploy", "SLA + dedicated support"],
                buttonText: "Book a call",
                isPopular: false
            }
        ],
        extraCard: {
            eyebrow: "ENTERPRISE AI INFRASTRUCTURE",
            title: "LLM Fine-tuning · Voice AI Agents · On-premise Deployment",
            description: "Custom models trained on your proprietary data. Voice-first customer support automation. Private infrastructure. Starts at $11,000 — scoped individually.",
            pills: ["LLM fine-tuning", "Voice AI agents", "On-premise deploy", "ERP / CRM integration", "Uptime SLA"],
            buttonText: "Book a scoping call"
        }
    }
];

const Services = () => {
    const [activeTab, setActiveTab] = useState(servicesData[0].id);

    const activeService = servicesData.find(s => s.id === activeTab) || servicesData[0];

    return (
        <section className="w-full py-24 bg-zinc-950 text-white overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">
                        services we offer
                    </h2>
                    
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-16">
                        {servicesData.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                    activeTab === service.id 
                                    ? "bg-white text-black border-white" 
                                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                                }`}
                            >
                                {service.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col gap-16 transition-opacity duration-300 animate-in fade-in slide-in-from-bottom-4">
                    
                    {/* Service Description */}
                    <div className="max-w-4xl">
                        <h3 className="text-3xl md:text-5xl font-heading font-semibold leading-tight mb-6">
                            {activeService.heading}
                        </h3>
                        <p className="text-lg text-zinc-400 font-sans leading-relaxed mb-10 max-w-3xl">
                            {activeService.subheading}
                        </p>

                        {/* Detail Pills */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {activeService.pills.map((pill, i) => (
                                <div key={i} className="px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-medium">
                                    {pill}
                                </div>
                            ))}
                        </div>

                        {/* Borderless Stats Cards */}
                        {activeService.stats && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 border-y border-zinc-900">
                                {activeService.stats.map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-1">
                                        <span className="text-2xl md:text-3xl font-heading font-bold text-white leading-none">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {activeService.cards.map((card, i) => (
                            <div 
                                key={i} 
                                className={`relative group p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                                    card.isPopular 
                                    ? "bg-zinc-900 border-blue-600/50 shadow-[0_0_40px_rgba(37,99,235,0.1)]" 
                                    : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                                }`}
                            >
                                {card.isPopular && (
                                    <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                                        <MdAutoAwesome size={10} />
                                        {card.popularLabel || "Most popular"}
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h4 className="text-xl font-heading font-semibold mb-2">{card.name}</h4>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-4xl font-heading font-bold">{card.price}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">
                                        {card.duration}
                                    </p>
                                </div>

                                <div className="h-px w-full bg-zinc-800 mb-8" />

                                <ul className="space-y-4 mb-10 grow">
                                    {card.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                                                card.isPopular ? "bg-blue-600/20 text-blue-500" : "bg-zinc-800 text-zinc-500"
                                            }`}>
                                                <MdCheck size={12} />
                                            </div>
                                            <span className="text-sm text-zinc-400 font-medium leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all ${
                                        card.isPopular 
                                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20" 
                                        : "bg-transparent border border-zinc-700 hover:border-zinc-500 text-white"
                                    }`}
                                >
                                    {card.buttonText}
                                    <MdArrowOutward size={16} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Full-width Extra Card (Bento Section) */}
                    {activeService.extraCard && (
                        <div className="relative p-8 md:p-12 rounded-4xl border border-zinc-800 bg-zinc-900/20 overflow-hidden group">
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                                <div className="max-w-3xl">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 block">
                                        {activeService.extraCard.eyebrow}
                                    </span>
                                    <h5 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4 leading-tight">
                                        {activeService.extraCard.title}
                                    </h5>
                                    <p className="text-zinc-400 font-sans leading-relaxed mb-8 text-sm md:text-base">
                                        {activeService.extraCard.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeService.extraCard.pills.map((pill, i) => (
                                            <span key={i} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] font-bold uppercase tracking-wide">
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="shrink-0 w-full md:w-auto">
                                    <button className="w-full md:w-auto px-10 py-5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-3 active:scale-95">
                                        {activeService.extraCard.buttonText}
                                        <MdArrowOutward size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
