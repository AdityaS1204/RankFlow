"use client";

import React from "react";
import { MdOutlineVerified } from "react-icons/md";
import CTAButton from "./CTAButton";

const AuditHook = () => {
    const checklist = [
        "LLM Visibility Score",
        "Content Intent Mapping",
        "Technical GEO Audit",
        "Conversion Friction Map",
        "3-Step Action Plan"
    ];

    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <div className="relative bg-[#1a1a1e] rounded-[48px] p-10 md:p-10 lg:p-10 text-center flex flex-col items-center gap-10 overflow-hidden group">
                    {/* Subtle Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-all duration-700" />

                    <div className="flex flex-col gap-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight italic">
                            Convert the Skeptics.
                        </h2>
                        <p className="font-sans text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We'll audit your current page through the lens of modern AI agents. No fluff, just technical observations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full max-w-2xl mx-auto relative z-10 border-t border-white/10 pt-10">
                        {checklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-white/70 font-sans">
                                <MdOutlineVerified className="text-blue-500" size={20} />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4 relative z-10 mt-6">
                        <CTAButton className="scale-110">
                            Get a Free AI SEO Audit
                        </CTAButton>
                        <p className="font-sans text-xs text-white/30 italic">
                            5-minute review. No sales pressure.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditHook;
