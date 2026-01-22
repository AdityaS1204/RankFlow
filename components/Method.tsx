"use client";

import React from "react";

const Method = () => {
    const steps = [
        {
            number: "01",
            title: "AI Search & Intent Audit",
            description: "We analyze how search agents perceive your current offer.",
        },
        {
            number: "02",
            title: "Conversion-Focused Structure",
            description: "Building the backbone of your page for maximum clarity.",
        },
        {
            number: "03",
            title: "AI-Optimized Copy & Layout",
            description: "Crafting copy that answers both humans and AI bots.",
        },
        {
            number: "04",
            title: "Launch + Optimize",
            description: "Rapid deployment followed by data-driven refinements.",
        },
    ];

    return (
        <section className="w-full py-24 bg-black/[0.01]" id='features'>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col gap-12 text-center md:text-left">
                    <div className="max-w-6xl text-center">
                        <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                            The <span className="italic">Rankflow</span> Method
                        </h2>
                        <p className="font-sans text-black/60 mt-4">
                            Intelligence and confidence in every step. No guesswork, just process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col gap-6 p-8 pt-22 bg-white border border-black/5 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                                <span className="font-serif text-5xl text-black/15 italic font-bold absolute top-4 right-6 select-none">
                                    {step.number}
                                </span>
                                <div className="pt-4">
                                    <h3 className="font-serif text-xl font-medium text-black mb-3 italic">
                                        {step.title}
                                    </h3>
                                    <p className="font-sans text-sm text-black/50 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Method;
