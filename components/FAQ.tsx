"use client";

import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const faqData = [
    {
        question: "Do you sign NDAs?",
        answer: "Yes. We understand that your business strategy and proprietary data are sensitive. We sign a mutual NDA before any scoping or development begins on every project."
    },
    {
        question: "What if I'm not happy with the work?",
        answer: "We offer an unconditional satisfaction guarantee. We will revise the work until it's exactly what you need, or we will issue a full refund. No fine print, no conditions."
    },
    {
        question: "Do I own the code?",
        answer: "Fully. Once the final payment is made, all intellectual property, source code, and design assets are 100% yours. No recurring license fees, no vendor lock-in."
    },
    {
        question: "Can I hire you on retainer?",
        answer: "Yes. Many clients choose to keep us on retainer for continuous AEO updates, new feature releases, or custom AI infrastructure management. Ask us about our monthly partnership plans."
    },
    {
        question: "How do I get started?",
        answer: "Book a free 30-minute scoping call. We'll discuss your goals, determine the technical requirements, and provide a fixed-price scope. You decide if we're the right fit—no pressure."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-24 bg-white overflow-hidden" id="faq">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                        Common Questions
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-heading font-semibold text-black leading-tight">
                        Answers to your objections.
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`group rounded-2xl border transition-all duration-300 ${
                                openIndex === i ? "border-black bg-zinc-50" : "border-zinc-100 bg-white hover:border-zinc-200"
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className={`text-lg md:text-xl font-heading font-semibold transition-colors ${
                                    openIndex === i ? "text-black" : "text-black/70 group-hover:text-black"
                                }`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full border border-black/5 flex items-center justify-center transition-transform duration-300 ${
                                    openIndex === i ? "rotate-180 bg-black text-white" : "text-black/40"
                                }`}>
                                    {openIndex === i ? <MdRemove size={20} /> : <MdAdd size={20} />}
                                </div>
                            </button>
                            
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}>
                                <div className="px-6 md:px-8 pb-8 text-zinc-500 font-sans leading-relaxed text-base md:text-lg max-w-2xl font-light">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-zinc-950 text-center">
                    <p className="text-zinc-400 font-sans font-medium mb-6">
                        Still have a blocker? Let's clear it up on a call.
                    </p>
                    <button 
                        onClick={() => window.location.href = '#hero'}
                        className="px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95"
                    >
                        Book a free 30-min call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
