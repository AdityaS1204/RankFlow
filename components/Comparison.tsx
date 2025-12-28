"use client";

import React from "react";
import { MdOutlineRemoveCircleOutline, MdOutlineCheckCircleOutline } from "react-icons/md";

const Comparison = () => {
    return (
        <section className="w-full py-24 bg-black/[0.01]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-black italic">
                        Visual Proof
                    </h2>
                    <p className="font-sans text-black/50 mt-4">
                        The difference between disappearing and dominating in modern search.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 border border-black/5 rounded-[40px] overflow-hidden bg-white shadow-xl">
                    {/* Left: Before */}
                    <div className="p-10 md:p-16 flex flex-col gap-10 bg-black/[0.02] border-r border-black/5 opacity-80">
                        <div className="flex items-center gap-3">
                            <MdOutlineRemoveCircleOutline className="text-black/40" size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest text-black/40 font-sans">Before Rankflow</span>
                        </div>

                        <div className="flex flex-col gap-8 grayscale opacity-40">
                            <div className="h-8 w-2/3 bg-black/20 rounded" />
                            <div className="flex flex-col gap-4">
                                <div className="h-4 w-full bg-black/10 rounded" />
                                <div className="h-4 w-5/6 bg-black/10 rounded" />
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="h-24 bg-black/5 rounded border border-dashed border-black/20" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {["Generic copy", "SEO-only structure", "Low clarity"].map((label, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-black/40 font-sans font-medium">
                                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: After */}
                    <div className="p-10 md:p-16 flex flex-col gap-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full" />

                        <div className="flex items-center gap-3 relative z-10 text-blue-600">
                            <MdOutlineCheckCircleOutline size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest font-sans">After Rankflow</span>
                        </div>

                        <div className="flex flex-col gap-8 relative z-10">
                            <div className="h-8 w-2/3 bg-blue-600/20 rounded border border-blue-600/10" />
                            <div className="flex flex-col gap-4">
                                <div className="h-4 w-full bg-blue-600/10 rounded border border-blue-600/5" />
                                <div className="h-4 w-3/4 bg-blue-600/10 rounded border border-blue-600/5" />
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="h-24 bg-blue-50 border border-blue-200 rounded-xl relative overflow-hidden p-6 flex items-center shadow-sm">
                                    <div className="w-full h-full bg-white rounded shadow-inner" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative z-10">
                            {["AI-readable intent blocks", "Clear conversion flow", "Built for AI answers"].map((label, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-blue-600 font-sans font-bold">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
