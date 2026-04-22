"use client";

import { MdArrowForward } from "react-icons/md";
import CTAButton from "./CTAButton";
import ShowcaseMarquee from "./ShowcaseMarquee";
import { motion } from "motion/react"
import { openCalendly } from "@/lib/calendly";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";


const Hero = () => {
    return (
        <section className="relative w-full flex flex-col items-center pt-20 md:pt-28 bg-white overflow-hidden">
            {/* 1. Heading Section */}
            <div className="relative z-30 max-w-6xl mx-auto text-center px-4 mb-12">

                {/* Badge Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="my-6  flex items-center justify-center gap-2"
                >
                    <Link href="https://ui.rankflow.in/" className="relative overflow-hidden rounded-full border  border-zinc-300 shadow-2xs px-4 py-1.5 text-xs font-medium text-foreground cursor-pointer">
                        {/* Shimmer sweep */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                            style={{ skewX: "-45deg" }}
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 2 }}
                        />
                        <div className="relative group flex gap-1 text-black font-sans">✦ Introducing our UI Library<span className="group-hover:text-amber-500 flex gap-1 transition-all duration-150"> Rankflow UI <RxArrowRight className="group-hover:translate-x-1 transition-all duration-150" /> </span></div>
                    </Link>
                </motion.div>

                <h1 className="text-2xl md:text-4xl lg:text-[60px] font-heading font-bold leading-[1.1] tracking-tight text-black mb-8 max-w-5xl mx-auto">
                    We build AI-first products for founders who can't afford to move slow.
                </h1>

                <p className="text-lg md:text-xl text-black/60 font-sans font-normal leading-relaxed max-w-3xl mx-auto tracking-tight mb-10">
                    Landing pages that get cited by AI search engines. Apps that ship. Agentic Chatbots that cut your support cost by half. Pick what you need.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 w-full md:w-auto">
                        <CTAButton
                            className="scale-100 md:scale-110 w-full md:w-auto"
                            onClick={() => document.getElementById('deliverables')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Send Message
                            <MdArrowForward />
                        </CTAButton>

                        <button
                            onClick={() => openCalendly()}
                            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl p-[2px] font-sans transition-all active:scale-[0.98] scale-100 md:scale-110 w-full md:w-auto"
                        >
                            <span className="absolute inset-0 rounded-xl bg-black transition-all group-hover:bg-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.1)]"></span>
                            <span className="relative flex h-full w-full items-center justify-center rounded-xl bg-zinc-900 px-8 text-lg font-semibold text-white border-t border-white/10">
                                Book a free call
                            </span>
                        </button>
                    </div>

                    <p className="text-sm font-sans text-black/40 flex items-center justify-center gap-2 font-semibold">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Limited slots for April 2026.
                    </p>
                </div>
            </div>

            {/* 2. Showcase Marquee */}
            <div className="w-full mt-8">
                <ShowcaseMarquee />
            </div>
        </section>
    );
};

export default Hero;
