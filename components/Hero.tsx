"use client";

import { MdTrendingUp } from "react-icons/md";
import CTAButton from "./CTAButton";

const Hero = () => {
    return (
        <section className="relative w-full flex flex-col items-center pt-32 md:pt-42 bg-white overflow-hidden">
            {/* 1. Heading Section - High z-index to stay on top */}
            <div className="relative z-30 max-w-6xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-[80px] font-serif leading-[1.1] tracking-tight text-black">
                    Landing pages built to rank in
                    <div className="inline-flex items-center align-middle mx-2 md:mx-4 translate-y-[-2px] md:translate-y-[-4px]">
                        <span className="relative flex h-12 w-16 md:h-20 md:w-32 items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_16px_rgba(59,130,246,0.2)] border-t border-white/20 -rotate-3">
                            <MdTrendingUp size={32} className="text-white drop-shadow-lg md:size-[48px]" />
                        </span>
                    </div>
                    <br />
                    <span className="text-blue-600 mr-3">AI search</span>and convert users
                </h1>
            </div>

            {/* 2. Image & CTA Section - Reduced height to minimize gap */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] -mt-12 md:-mt-[120px] lg:-mt-[200px] z-10 overflow-hidden group">
                {/* The Image */}
                <img
                    src="/herobg.png"
                    alt="Product Showcase"
                    className="w-full h-full object-contain block opacity-70"
                />

                {/* Overlays for depth and blending */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

                {/* 3. The Content ON the image */}
                <div className="absolute inset-0 z-20 mt-[-50px] flex flex-col items-center justify-center text-center px-4">
                    <div className="flex flex-col items-center gap-8 max-w-3xl">
                        {/* Subheadline Overlay */}
                        <p className="text-lg md:text-2xl text-black font-sans leading-relaxed max-w-2xl font-medium tracking-tight">
                            Rankflow designs high-conversion landing pages optimized for ChatGPT, Google SGE, and modern search behavior.
                        </p>

                        {/* CTA Button Overlay */}
                        <div className="flex flex-col items-center gap-4">
                            <CTAButton className="scale-100 md:scale-125">
                                Get a free AI SEO audit
                            </CTAButton>

                            <p className="text-sm font-sans text-black/40 flex items-center gap-2 font-semibold">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                3–5 day delivery. No long contracts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
