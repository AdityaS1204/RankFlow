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
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight tracking-tight uppercase">
                        Ready to build something <br className="hidden md:block" />
                         that works?
                    </h2>
                    <p className="font-sans text-zinc-500 text-md md:text-lg max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
                        Book a free 30-minute call. We'll scope your project, answer every question, 
                        and tell you honestly if we're the right fit.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <button 
                        onClick={() => openCalendly()}
                        className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-2xl p-[2px] font-sans transition-all active:scale-[0.98] scale-80 md:scale-100 bg-black"
                    >
                        <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 px-10 text-xl font-bold text-white border-t border-white/10 group-hover:bg-zinc-800 transition-colors">
                            Book intro call
                            <MdArrowForward className="ml-3 group-hover:translate-x-1 transition-transform" /> 
                        </span>
                    </button>
                </div>
            </div>
            
            {/* Subtle architectural grid pattern in background */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
        </section>
    );
};

export default FinalCTA;
