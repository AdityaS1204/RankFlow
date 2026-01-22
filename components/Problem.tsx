"use client";

import React from "react";
import { MdOutlineClose } from "react-icons/md";

const Problem = () => {
    return (
        <section className="w-full py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="flex flex-col gap-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-black/40 font-sans">
                            The Problem
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif leading-[1.2] text-black">
                            Your landing page is <span className="italic">invisible</span> to the next generation of search.
                        </h2>
                        <div className="flex flex-col gap-4 mt-4">
                            {[
                                "Traditional SEO structures fail in LLM retrieval.",
                                "High traffic but zero intent-based conversion.",
                                "Static copy that doesn't answer AI queries.",
                                "Slow delivery cycles that miss market trends."
                            ].map((bullet, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                        <MdOutlineClose className="text-red-500" size={14} />
                                    </div>
                                    <p className="font-sans text-black/60 leading-relaxed">{bullet}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Card */}
                    <div className="relative">
                        <div className="bg-black/[0.03] border border-black/5 rounded-3xl p-8 aspect-[4/3] relative overflow-hidden shadow-inner">
                            {/* Mock Wireframe - Generic/Bad Website */}
                            <div className="w-full h-full bg-white rounded-xl border border-black/10 flex flex-col opacity-60 grayscale overflow-hidden">
                                {/* Generic Nav */}
                                <div className="w-full h-12 border-b border-black/5 flex items-center justify-between px-6 bg-slate-50">
                                    <span className="text-[10px] font-bold text-black/40">GenericCorp</span>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-2 bg-black/10 rounded-full" />
                                        <div className="w-8 h-2 bg-black/10 rounded-full" />
                                    </div>
                                </div>

                                {/* Generic Hero */}
                                <div className="p-6 flex flex-col gap-3 text-center border-b border-black/5 pb-8">
                                    <h3 className="text-xl font-serif text-black/80">Welcome to the #1 Solution</h3>
                                    <p className="text-[10px] text-black/50 leading-relaxed max-w-[80%] mx-auto">
                                        We provide best-in-class services for your business growth.
                                        Leveraging synergies to drive scalable value propositions.
                                    </p>
                                    <button className="mx-auto mt-2 px-4 py-1.5 bg-black/80 text-white text-[10px] rounded">
                                        Learn More
                                    </button>
                                </div>

                                {/* Generic Features Grid */}
                                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 flex-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white p-2 rounded border border-black/5 flex flex-col items-center gap-1.5 text-center">
                                            <div className="w-6 h-6 bg-black/5 rounded-full mb-1" />
                                            <div className="w-12 h-1.5 bg-black/10 rounded" />
                                            <div className="w-10 h-1 bg-black/5 rounded" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Annotated Callouts */}
                            <div className="absolute top-12 left-4 md:left-8 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transform -rotate-3 z-10">
                                GENERIC SEO
                            </div>
                            <div className="absolute top-1/2 right-4 md:right-12 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transform rotate-6 z-10">
                                NO AI INTENT STRUCTURE
                            </div>
                            <div className="absolute bottom-16 left-8 md:left-1/4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transform -rotate-2 z-10">
                                TRAFFIC WITH NO CONVERSION
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
