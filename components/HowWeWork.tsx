"use client";

import React from "react";
import { MdOutlineTimer, MdOutlineSpeed, MdOutlineCheckCircleOutline } from "react-icons/md";

const steps = [
    {
        title: "We scope it in 48 hours.",
        description: "One call, one clear brief, one fixed price. We eliminate ambiguity up front so you know exactly what you're paying for. No hidden fees, no scope creep.",
        highlight: "One call · Fixed price"
    },
    {
        title: "You see progress every week.",
        description: "Review Figma previews, access real-time staging links, and get daily Slack updates. We don't do 'black-box' builds—you're involved in every milestone.",
        highlight: "Real-time visibility"
    },
    {
        title: "We ship, you own everything.",
        description: "We hand over the full source code, all deployment credentials, and documentation. No licenses, no hidden dependencies, no vendor lock-in.",
        highlight: "100% IP ownership"
    }
];

const HowWeWork = () => {
    return (
        <section className="w-full py-24 bg-white overflow-hidden" id="how-we-work">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                        our process
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-semibold text-black leading-tight">
                        Built for confidence. <br className="hidden md:block" />
                        Designed for speed.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting lines for desktop */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-zinc-100 z-0" />

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col group">
                            {/* Step Number & Icon */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-8 rounded-full text-black/40 text-3xl font-heading italic font-bold flex items-center justify-center">
                                    0{i + 1}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-2xl font-heading font-semibold text-black max-w-[200px]">
                                    {step.title}
                                </h4>
                                <p className="font-sans text-zinc-500 font-normal leading-relaxed text-base">
                                    {step.description}
                                </p>

                                <div className="mt-4 inline-flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        {step.highlight}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Assurance Card */}
                <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl">
                        <h5 className="text-2xl font-heading font-semibold mb-3">
                            Working with a remote studio shouldn't feel like a gamble.
                        </h5>
                        <p className="text-zinc-500 font-sans font-normal leading-relaxed">
                            We use modern tools and a synchronous communication model to ensure
                            every project is delivered on time, within budget, and with zero surprises.
                        </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                                    RF
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">Trusted by founders</span>
                            <span className="text-xs text-zinc-500">Across 3 timezones</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
