"use client";

import React from "react";
import {
    MdOutlineDashboard,
    MdOutlineSearch,
    MdOutlineAdsClick,
    MdOutlineContactMail,
    MdOutlineSpeed,
    MdOutlinePhonelink
} from "react-icons/md";

const Deliverables = () => {
    const cards = [
        {
            icon: <MdOutlineDashboard size={24} />,
            title: "Custom Landing Page",
            bullets: ["Unique design system", "Tailored to your brand"]
        },
        {
            icon: <MdOutlineSearch size={24} />,
            title: "AI SEO & GEO Optimization",
            bullets: ["LLM retrieval structure", "Keywords for modern search"]
        },
        {
            icon: <MdOutlineAdsClick size={24} />,
            title: "Conversion-First UI",
            bullets: ["Psychological triggers", "Frictionless UX"]
        },
        {
            icon: <MdOutlineContactMail size={24} />,
            title: "Lead Capture Setup",
            bullets: ["Form integration", "Automated tracking"]
        },
        {
            icon: <MdOutlineSpeed size={24} />,
            title: "Fast Delivery",
            bullets: ["Launched in 3-5 days", "No long-term contracts"]
        },
        {
            icon: <MdOutlinePhonelink size={24} />,
            title: "Mobile & Performance",
            bullets: ["90+ PageSpeed scores", "Fully responsive layout"]
        }
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">
                        What You Get
                    </h2>
                    <p className="font-sans text-black/50 mt-4 max-w-xl mx-auto">
                        Tangible deliverables to remove any ambiguity. Calm, confident execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-6 p-4">
                            <div className="text-blue-600">
                                {card.icon}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="font-serif text-xl font-medium text-black italic">
                                    {card.title}
                                </h3>
                                <ul className="flex flex-col gap-2">
                                    {card.bullets.map((bullet, i) => (
                                        <li key={i} className="font-sans text-sm text-black/40 flex items-center gap-2">
                                            <div className="w-1 h-1 bg-black/20 rounded-full" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Deliverables;
