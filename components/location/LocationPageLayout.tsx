"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MdArrowForward, MdArrowOutward, MdCheck, MdAutoAwesome, MdAdd, MdRemove, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RxArrowRight } from "react-icons/rx";
import { openCalendly } from "@/lib/calendly";
import CTAButton from "@/components/CTAButton";
import ShowcaseMarquee from "@/components/ShowcaseMarquee";


export interface LocationHeroData {
  badge: string;
  headline: string;
  subheadline: string;
  availability: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceCard {
  name: string;
  price: string;
  duration: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  popularLabel?: string;
}

export interface ServiceSection {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  pills: string[];
  stats?: StatItem[];
  cards: ServiceCard[];
}

export interface ProcessStep {
  title: string;
  description: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocationPageData {
  city: string;
  hero: LocationHeroData;
  services: ServiceSection[];
  processHeading: string;
  processSubheading: string;
  processSteps: ProcessStep[];
  assuranceTitle: string;
  assuranceBody: string;
  faqs: FAQItem[];
  ctaHeadline: string;
  ctaSubline: string;
  localSignal: string;
}



const LocationNavbar = () => {
  const [isHidden, setIsHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY.current;
      setIsHidden(isScrollingDown && currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-[42px] left-0 right-0 z-50 px-4 md:px-8 transition-transform duration-300 ${isHidden ? "-translate-y-24" : "translate-y-0"}`}>
      <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-2 flex items-center justify-between max-w-4xl mx-auto border border-white/20 ring-1 ring-black/5">
        <Link href="/" className="flex items-center gap-2">
          <Image src={"/icon.png?v=2"} alt="RankFlow Logo" width={24} height={24} className="w-6 h-6 rounded-lg" unoptimized />
          <span className="text-xl font-bold tracking-wide text-black font-serif">Rankflow</span>
        </Link>
        <button
          className="flex cursor-pointer items-center justify-center bg-blue-500 text-white text-sm font-sans font-medium px-5 py-2 rounded-xl hover:bg-blue-600 transition-colors [box-shadow:inset_0_2px_4px_0_rgb(0_0_0/0.6)] text-shadow-sm text-shadow-white/10 ring-1 ring-black/90"
          onClick={() => openCalendly()}
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
};

const LocationHero = ({ data }: { data: LocationHeroData }) => (
  <section className="relative w-full flex flex-col items-center pt-20 md:pt-28 bg-white overflow-hidden">
    <div className="relative z-30 max-w-6xl mx-auto text-center px-4 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="my-6 flex items-center justify-center gap-2"
      >
        <Link href="https://ui.rankflow.in/" className="relative overflow-hidden rounded-full border border-zinc-300 shadow-2xs px-4 py-1.5 text-xs font-medium text-foreground cursor-pointer flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            style={{ skewX: "-45deg" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 2 }}
          />
          <div className="relative group flex gap-1 text-black font-sans">
            ✦ {data.badge}
            <span className="group-hover:text-amber-500 flex gap-1 transition-all duration-150">
              Rankflow UI <RxArrowRight className="group-hover:translate-x-1 transition-all duration-150" />
            </span>
          </div>
        </Link>
      </motion.div>

      <h1 className="text-2xl md:text-4xl lg:text-[60px] font-heading font-bold leading-[1.1] tracking-tight text-black mb-8 max-w-5xl mx-auto">
        {data.headline}
      </h1>

      <p className="text-lg md:text-xl text-black/60 font-sans font-normal leading-relaxed max-w-3xl mx-auto tracking-tight mb-10">
        {data.subheadline}
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 w-full md:w-auto">
          <CTAButton
            className="scale-100 md:scale-110 w-full md:w-auto"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            See Our Services
            <MdArrowForward />
          </CTAButton>

          <button
            onClick={() => openCalendly()}
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl p-[2px] font-sans transition-all active:scale-[0.98] scale-100 md:scale-110 w-full md:w-auto"
          >
            <span className="absolute inset-0 rounded-xl bg-black transition-all group-hover:bg-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.1)]" />
            <span className="relative flex h-full w-full items-center justify-center rounded-xl bg-zinc-900 px-8 text-lg font-semibold text-white border-t border-white/10">
              Book a free call
            </span>
          </button>
        </div>

        <p className="text-sm font-sans text-black/40 flex items-center justify-center gap-2 font-semibold">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          {data.availability}
        </p>
      </div>
    </div>

    <div className="w-full mt-8">
      <ShowcaseMarquee />
    </div>
  </section>
);

const LocationServices = ({ services }: { services: ServiceSection[] }) => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const active = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="w-full py-24 bg-zinc-950 text-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6">services we offer</h2>
          <div className="flex flex-wrap gap-2 mb-16">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeTab === s.id ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div key={activeTab} className="max-w-4xl animate-services-fade">
            <h3 className="text-3xl md:text-5xl font-heading font-semibold leading-tight mb-6">{active.heading}</h3>
            <p className="text-lg text-zinc-400 font-sans leading-relaxed mb-10 max-w-3xl">{active.subheading}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {active.pills.map((pill, i) => (
                <div key={i} className="px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-medium">
                  {pill}
                </div>
              ))}
            </div>

            {active.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 border-y border-zinc-900">
                {active.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-white leading-none">{stat.value}</span>
                    <span className="text-xs md:text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {active.cards.map((card, i) => (
              <div
                key={i}
                className={`relative group p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                  card.isPopular ? "bg-zinc-900 border-blue-600/50 shadow-[0_0_40px_rgba(37,99,235,0.1)]" : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <MdAutoAwesome size={10} />
                    {card.popularLabel || "Most popular"}
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-xl font-heading font-semibold mb-2">{card.name}</h4>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-heading font-bold">{card.price}</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{card.duration}</p>
                </div>

                <div className="h-px w-full bg-zinc-800 mb-8" />

                <ul className="space-y-4 mb-10 grow">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${card.isPopular ? "bg-blue-600/20 text-blue-500" : "bg-zinc-800 text-zinc-500"}`}>
                        <MdCheck size={12} />
                      </div>
                      <span className="text-sm text-zinc-400 font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openCalendly()}
                  className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all ${
                    card.isPopular ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20" : "bg-transparent border border-zinc-700 hover:border-zinc-500 text-white"
                  }`}
                >
                  {card.buttonText}
                  <MdArrowOutward size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes services-fade {
          0% { opacity: 0; transform: translateY(8px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-services-fade { animation: services-fade 420ms ease-out; will-change: opacity, transform, filter; }
      `}</style>
    </section>
  );
};


const LocationProcess = ({
  heading,
  subheading,
  steps,
  assuranceTitle,
  assuranceBody,
}: {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
  assuranceTitle: string;
  assuranceBody: string;
}) => (
  <section className="w-full py-24 bg-white overflow-hidden" id="how-we-work">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">our process</h2>
        <h3 className="text-4xl md:text-5xl font-heading font-semibold text-black leading-tight">{heading}</h3>
        {subheading && <p className="mt-4 text-zinc-500 font-sans leading-relaxed">{subheading}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-zinc-100 z-0" />
        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-8 rounded-full text-black/40 text-3xl font-heading italic font-bold flex items-center justify-center">
                0{i + 1}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-heading font-semibold text-black max-w-[220px]">{step.title}</h4>
              <p className="font-sans text-zinc-500 font-normal leading-relaxed text-base">{step.description}</p>
              <div className="mt-4 inline-flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">{step.highlight}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl">
          <h5 className="text-2xl font-heading font-semibold mb-3">{assuranceTitle}</h5>
          <p className="text-zinc-500 font-sans font-normal leading-relaxed">{assuranceBody}</p>
        </div>
        <div className="shrink-0 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold">RF</div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold">Trusted by founders</span>
            <span className="text-xs text-zinc-500">Across 3 timezones</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const LocationFAQ = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-white overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-black leading-tight">FAQs</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`group rounded-2xl border transition-all duration-300 ${openIndex === i ? "border-black bg-zinc-50" : "border-zinc-100 bg-white hover:border-zinc-200"}`}
            >
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 md:p-8 text-left">
                <span className={`text-lg md:text-xl font-heading font-semibold transition-colors ${openIndex === i ? "text-black" : "text-black/70 group-hover:text-black"}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? "rotate-180 bg-black text-white" : "text-black/40"}`}>
                  {openIndex === i ? <MdRemove size={20} /> : <MdAdd size={20} />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 md:px-8 pb-8 text-zinc-500 font-sans leading-relaxed text-base md:text-lg max-w-2xl font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 text-center">
          <p className="text-zinc-400 font-sans font-medium mb-6">Still have questions? Let's clear them up on a call.</p>
          <button
            onClick={() => openCalendly()}
            className="px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95"
          >
            Book a free 30-min call
          </button>
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────────────────

const LocationCTA = ({ headline, subline, localSignal }: { headline: string; subline: string; localSignal: string }) => (
  <section className="w-full py-16 md:py-24 bg-white flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm">
    <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent opacity-50" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-100" />
    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-tight tracking-tight uppercase">
          {headline}
        </h2>
        <p className="font-sans text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal tracking-tight">
          {subline}
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <button
          onClick={() => openCalendly()}
          className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-2xl p-[2px] font-sans transition-all active:scale-[0.98] scale-110 md:scale-125 bg-black"
        >
          <span className="relative flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900 px-10 text-xl font-bold text-white border-t border-white/10 group-hover:bg-zinc-800 transition-colors">
            Book a call — it&apos;s free
            <MdArrowForward className="ml-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <p className="font-sans text-sm text-zinc-400 font-bold uppercase tracking-widest">{localSignal}</p>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[40px_40px]" />
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const LocationFooter = () => (
  <footer className="w-full bg-white border-t border-black/5 py-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
              <Image src={"/icon.png?v=2"} alt="RankFlow Logo" width={28} height={28} className="w-7 h-7 object-contain" unoptimized />
            </div>
            <span className="text-xl font-bold tracking-tight text-black font-serif">Rankflow</span>
          </div>
          <p className="font-sans text-sm text-zinc-400 font-medium">Based in India · Available for UK, US & global clients</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <Link href="mailto:contact@rankflow.in" className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors font-sans text-sm font-semibold group">
            <MdEmail className="text-zinc-300 group-hover:text-black transition-colors" size={18} />
            contact@rankflow.in
          </Link>
          <Link href="https://www.linkedin.com/company/rankflow-studio/" className="flex items-center gap-3 text-black/60 hover:text-black transition-colors font-sans group">
            <FaLinkedin className="text-zinc-300 group-hover:text-black transition-colors" size={18} />
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="md:mt-10 mt-0 pt-1 md:pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-xs text-black/50 font-medium">© {new Date().getFullYear()} Rankflow. All rights reserved.</p>
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          <Link href="/privacy-policy" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">Privacy Policy</Link>
          <Link href="/terms" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">Terms of Service</Link>
          <Link href="/llms.txt" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">llms.txt</Link>
        </div>
      </div>
    </div>
  </footer>
);

// ─── Root Layout Component ────────────────────────────────────────────────────

const LocationPageLayout = ({ data }: { data: LocationPageData }) => {
  const patternBorder = <div className="pattern-border" />;

  return (
    <main className="min-h-screen bg-white text-black selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <LocationNavbar />

      <div className="square-pattern p-4 md:p-[30px]">
        <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden relative">
          <LocationHero data={data.hero} />
        </div>
      </div>

      <LocationServices services={data.services} />
      {patternBorder}

      <LocationProcess
        heading={data.processHeading}
        subheading={data.processSubheading}
        steps={data.processSteps}
        assuranceTitle={data.assuranceTitle}
        assuranceBody={data.assuranceBody}
      />
      {patternBorder}

      <LocationFAQ faqs={data.faqs} />
      {patternBorder}

      <div className="square-pattern p-4 md:p-[30px]">
        <div className="bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-black/5 rounded-2xl overflow-hidden relative">
          <LocationCTA headline={data.ctaHeadline} subline={data.ctaSubline} localSignal={data.localSignal} />
        </div>
      </div>
      {patternBorder}

      <LocationFooter />
    </main>
  );
};

export default LocationPageLayout;
