"use client";

import React from "react";
import CTAButton from "./CTAButton";

const FinalCTA = () => {
    return (
        <section
            className="w-full py-32 bg-white flex flex-col items-center text-center relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("/ctabg.png")' }}
        >
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-12">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl md:text-7xl font-serif text-black leading-tight tracking-tight">
                        Want to know <span className="italic">how your page</span> <br className="hidden md:block" />
                        performs in AI search?
                    </h2>
                    <p className="font-sans text-black/70 text-xl max-w-2xl mx-auto leading-relaxed">
                        Get a free AI SEO audit today and stop leaving your visibility to chance.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <CTAButton className="md:scale-125 scale-100">
                        Get a Free AI SEO Audit
                    </CTAButton>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="font-sans text-sm text-black/40 font-medium tracking-tight">
                            No sales pressure. Just 5 minutes of high-value clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
