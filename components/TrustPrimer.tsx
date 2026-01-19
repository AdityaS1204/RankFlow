"use client";

import React from "react";
import { MdOutlineAutoAwesome, MdOutlineTimer, MdOutlinePersonOutline } from "react-icons/md";

const TrustPrimer = () => {
    const items = [
        {
            icon: <MdOutlineAutoAwesome className="text-blue-600" size={24} />,
            title: "Built for AI Search",
            proof: "Optimized for LLM retrieval and GEO.",
        },
        {
            icon: <MdOutlineTimer className="text-blue-600" size={24} />,
            title: "3–5 Day Delivery",
            proof: "From audit to launch in one week.",
        },
        {
            icon: <MdOutlinePersonOutline className="text-blue-600" size={24} />,
            title: "Founder-Led Execution",
            proof: "No juniors. Direct communication.",
        },
    ];

    return (
        <section className="relative w-full bg-black/[0.02] border-y border-black/5 py-12 -mt-12 md:-mt-27 z-40">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-serif text-lg font-medium text-black italic">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-sm text-black/50 leading-relaxed">
                                    {item.proof}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustPrimer;
