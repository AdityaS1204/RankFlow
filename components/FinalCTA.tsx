"use client";

import React from "react";
import { openCalendly } from "@/lib/calendly";
import { MdArrowForward } from "react-icons/md";

const FinalCTA = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-white flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm">
            {/* Background design accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100" />
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-tight tracking-tight uppercase">
                        Ready to build <br className="hidden md:block" />
                        something that works?
                    </h2>
                    <p className="font-sans text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
                        Book a free 30-minute call. We'll scope your project, answer every question, 
                        and tell you honestly if we're the right fit.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <button 
                        onClick={() => openCalendly()}
                        className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-2xl p-[2px] font-sans transition-all active:scale-[0.98] scale-110 md:scale-125 bg-black"
                    >
                        <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 px-10 text-xl font-bold text-white border-t border-white/10 group-hover:bg-zinc-800 transition-colors">
                            Book a call — it's free
                            <MdArrowForward className="ml-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        <p className="font-sans text-sm text-zinc-400 font-bold uppercase tracking-widest">
                            Founder-led. No sales reps.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Subtle architectural grid pattern in background */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
        </section>
    );
};

export default FinalCTA;
