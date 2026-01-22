"use client";

import React from "react";
import { MdCheck, MdOutlineBlock } from "react-icons/md";

const WhoIsItFor = () => {
    return (
        <section className="w-full py-24 bg-black/[0.01]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight italic">
                        Who This Is For
                    </h2>
                    <p className="font-sans text-black/60 mt-4">
                        Increasing efficiency by filtering for the right founders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Good fit */}
                    <div className="bg-white p-6 md:p-14 border border-black/5 rounded-[40px] shadow-sm flex flex-col gap-8">
                        <div className="flex items-center gap-3 text-blue-600">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                <MdCheck size={24} />
                            </div>
                            <span className="font-sans font-bold uppercase tracking-widest text-sm">Perfect Fit</span>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "SaaS Founders", desc: "Scaling software with intent-driven traffic." },
                                { title: "Indie Builders", desc: "Moving fast and needing high-performance design." },
                                { title: "Service Businesses", desc: "Turning consultancy leads into automated bookings." },
                                { title: "Early-stage Startups", desc: "Building a foundation for the AI-first web." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <h4 className="font-serif text-xl text-black font-medium">{item.title}</h4>
                                    <p className="font-sans text-sm text-black/40">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Not for */}
                    <div className="bg-white p-6 md:p-14 border border-black/[0.05] rounded-[40px] flex flex-col gap-8 opacity-90 grayscale">
                        <div className="flex items-center gap-3 text-black/40">
                            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                                <MdOutlineBlock size={22} />
                            </div>
                            <span className="font-sans font-bold uppercase tracking-widest text-sm">Not for you if</span>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "No Clear Offer", desc: "We build for conversion, not exploration." },
                                { title: "No Budget", desc: "Premium execution requires appropriate resources." },
                                { title: "Just Experimenting", desc: "We focus on businesses ready for market dominance." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <h4 className="font-serif text-xl text-black/70 font-medium">{item.title}</h4>
                                    <p className="font-sans text-sm text-black/40">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsItFor;
