"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const FinalCTA = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"15min"});
            cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#f4a500"},"dark":{"cal-brand":"#edff83"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-white flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm">
            {/* Background design accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100" />
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-10 w-full">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight tracking-tight uppercase">
                        Ready to build something <br className="hidden md:block" />
                         that works?
                    </h2>
                    <p className="font-sans text-zinc-500 text-md md:text-lg max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
                        Book a free 15-minute call. We'll scope your project, answer every question, 
                        and tell you honestly if we're the right fit.
                    </p>
                </div>

                <div className="w-full min-h-[600px] border border-black/5 rounded-2xl overflow-hidden bg-zinc-50/50 p-1 md:p-3 relative">
                    <Cal 
                        namespace="15min"
                        calLink="rankflow-c2nadw/15min"
                        style={{width:"100%",height:"600px",overflow:"scroll"}}
                        config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
                    />
                </div>
            </div>
            
            {/* Subtle architectural grid pattern in background */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
        </section>
    );
};

export default FinalCTA;
