"use client";

import React from "react";
import { MdCheck, MdOutlineInfo } from "react-icons/md";
import CTAButton from "./CTAButton";

import { openCalendly } from "@/lib/calendly";

const Pricing = () => {
    const landingPageFeatures = [
        "Custom landing page designed for conversions",
        "AI-optimized content structure for ChatGPT, Google SGE, and modern search",
        "AI SEO + GEO optimization (not legacy keyword stuffing)",
        "Conversion-focused layout and copy flow",
        "Lead capture setup (form, CTA, basic tracking)",
        "Mobile-first, performance-ready design",
        "Clean, production-ready code",
    ];

    const landingPageProcess = [
        "Free AI SEO audit",
        "Page structure and copy finalized",
        "Design, build, and launch",
    ];

    const chatbotFeatures = [
        "AI chatbot embedded on your website",
        "Trained on your landing page and FAQs",
        "Answers visitor questions instantly",
        "Captures leads and qualifies intent",
        "Escalates complex queries to human support",
        "Ongoing updates as your content changes",
    ];

    return (
        <section className="w-full py-24 bg-black/[0.02] relative overflow-hidden" id="pricing">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-sans font-bold uppercase tracking-widest text-sm">Pricing</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight italic mt-4">
                        What package fits you?
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Main Package Card */}
                    <div className="bg-white rounded-[40px] border border-black/5 p-10 md:p-12 shadow-xl relative flex flex-col gap-8 transition-transform hover:-translate-y-1">
                        {/* Corner Screws */}
                        <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-black/10" />

                        <div className="flex flex-col gap-2">
                            <h3 className="text-3xl font-serif text-black font-medium">AI-Optimized Landing Page</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-5xl font-serif text-black font-bold">$499</span>
                                <span className="text-black/30 font-sans text-sm font-medium">One-time · 3–5 days</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-black/5" />

                        <div className="flex flex-col gap-8">
                            <div>
                                <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black/40 mb-4">What’s included</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {landingPageFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <MdCheck className="text-blue-600" size={10} />
                                            </div>
                                            <p className="font-sans text-sm text-black/60 leading-tight font-medium">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black/40 mb-4">How it works</h4>
                                <div className="flex flex-col gap-3">
                                    {landingPageProcess.map((step, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="w-5 h-5 rounded-full bg-black/5 flex items-center justify-center text-[10px] font-bold text-black/40">
                                                0{i + 1}
                                            </span>
                                            <p className="font-sans text-sm text-black/60 font-medium">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-8 flex flex-col items-center gap-4">
                            <CTAButton
                                onClick={() => openCalendly()}
                                className="w-full"
                            >
                                Book a Call
                            </CTAButton>
                            <p className="text-[10px] font-sans text-black/30 uppercase tracking-widest font-bold">
                                No long-term contracts. Founder-led.
                            </p>
                        </div>
                    </div>

                    {/* Add-on Package Card */}
                    <div className="bg-white rounded-[40px] border border-black/5 p-10 md:p-12 shadow-xl relative flex flex-col gap-8 transition-transform hover:-translate-y-1">
                        {/* Corner Screws */}
                        <div className="absolute top-6 left-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-black/10" />
                        <div className="absolute bottom-6 right-6 w-1.5 h-1.5 rounded-full bg-black/10" />

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-3xl font-serif text-black font-medium">AI Support & Lead Assistant</h3>
                                <span className="px-3 py-1 bg-blue-600/10 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-widest">Optional Add-on</span>
                            </div>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-5xl font-serif text-black font-bold">$199</span>
                                <span className="text-black/30 font-sans text-sm font-medium">/month · Setup required</span>
                            </div>
                        </div>

                        <div className="w-full h-px bg-black/5" />

                        <div>
                            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-black/40 mb-4">Includes</h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {chatbotFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                            <MdCheck className="text-blue-600" size={10} />
                                        </div>
                                        <p className="font-sans text-sm text-black/60 leading-tight font-medium">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-black/[0.02] border border-black/5 rounded-2xl p-6 flex gap-4 items-start">
                            <MdOutlineInfo className="text-black/20 flex-shrink-0" size={20} />
                            <p className="text-xs font-sans text-black/50 leading-relaxed italic">
                                Available as a standalone service or after your landing page is launched to automate support and lead capture.
                            </p>
                        </div>

                        <div className="mt-auto pt-8">
                            <button className="w-full h-14 rounded-full bg-black text-white font-sans font-bold uppercase tracking-widest text-xs hover:bg-black/90 transition-all shadow-lg active:scale-95">
                                Add to existing project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Microcopy Trust Boosters */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "No templates. Every page is custom.",
                        "Built for AI search, not legacy SEO.",
                        "Fast delivery without cutting corners."
                    ].map((trust, i) => (
                        <div key={i} className="flex items-center justify-center gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            <p className="font-sans text-sm font-bold text-black/40 uppercase tracking-tight">{trust}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background decoration (Pixel art vibes) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-50 z-0" />
        </section>
    );
};

export default Pricing;
