"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#f4a500"},"dark":{"cal-brand":"#edff83"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-24 md:h-32" />

      <div className="square-pattern p-4 md:p-[30px]">
        <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden relative p-6 md:p-12">
          {/* Subtle architectural grid pattern in background */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-black leading-tight tracking-tight uppercase">
              Book a 15 min Call
            </h1>
            <p className="font-sans text-zinc-500 text-md md:text-lg max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
              Select a date and time that works for you. We'll outline your project goals and answer any questions.
            </p>
            
            <div className="w-full min-h-[600px] border border-black/5 rounded-2xl overflow-hidden bg-zinc-50/50 p-1 md:p-3 mt-6 relative z-20">
              <Cal 
                namespace="15min"
                calLink="rankflow-c2nadw/15min"
                style={{width:"100%",height:"600px",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-border" />
      <Footer />
    </main>
  );
}
