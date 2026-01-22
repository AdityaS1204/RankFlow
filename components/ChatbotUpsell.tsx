"use client";

import React from "react";
import { MdOutlineSmartToy } from "react-icons/md";

const ChatbotUpsell = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[48px] p-10 md:p-14 lg:p-20 relative overflow-hidden group">
                    {/* Decorative background element */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/[0.03] blur-[100px] rounded-full group-hover:bg-blue-600/[0.05] transition-all duration-1000" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left: Product Visual Mockup */}
                        <div className="relative">
                            <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100 p-6 md:p-8 aspect-[4/5] md:aspect-square flex flex-col relative z-10 transition-transform duration-500 hover:-translate-y-2">
                                {/* Header */}
                                <div className="flex items-center gap-3 border-b border-blue-50 pb-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                        <MdOutlineSmartToy size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-black font-sans">RankBot</span>
                                        <span className="text-[10px] font-medium text-green-500 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Online
                                        </span>
                                    </div>
                                </div>

                                {/* Chat Area */}
                                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                                    {/* Bot Message */}
                                    <div className="self-start max-w-[85%]">
                                        <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 text-xs text-slate-700 font-sans leading-relaxed">
                                            Hi there! 👋 How can I help you dominate search today?
                                        </div>
                                    </div>

                                    {/* User Message */}
                                    <div className="self-end max-w-[85%]">
                                        <div className="bg-blue-600 text-white rounded-2xl rounded-br-sm p-3 text-xs font-sans leading-relaxed shadow-sm">
                                            Do you optimize for ChatGPT?
                                        </div>
                                    </div>

                                    {/* Bot Message with Typing Indicator */}
                                    <div className="self-start max-w-[85%]">
                                        <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-3 text-xs text-slate-700 font-sans leading-relaxed">
                                            Absolutely. We structure your content specifically for <span className="font-semibold text-blue-600">LLM retrieval</span> and semantic search relevance.
                                        </div>
                                    </div>
                                </div>

                                {/* Input Area */}
                                <div className="mt-4 pt-4 border-t border-blue-50">
                                    <div className="h-10 w-full bg-white border border-slate-200 rounded-full px-4 flex items-center justify-between shadow-sm">
                                        <span className="text-xs text-slate-400 font-sans">Type your email...</span>
                                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full -z-10" />
                        </div>

                        {/* Right: Copy */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <span className="text-blue-600 font-sans font-bold uppercase tracking-widest text-sm">Add-on Service</span>
                                <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                                    AI Support & <br /><span className="italic underline decoration-blue-200 underline-offset-8">Lead Assistant</span>
                                </h2>
                                <p className="font-sans text-black/60 text-lg leading-relaxed mt-4">
                                    Seamlessly capture intent and answer questions 24/7 without lifting a finger.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                {[
                                    "Intent-mapped responses",
                                    "Automated lead qualification",
                                    "Direct integration with your CRM"
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-3 text-black/70 font-sans">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <span className="font-medium">{bullet}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="font-sans text-xs text-black/30 italic mt-4">
                                * Available as a custom add-on to any landing page build.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatbotUpsell;
