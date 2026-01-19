"use client";

import React, { useState, useRef, useEffect } from "react";
import { MdSend, MdRefresh, MdCalendarToday } from "react-icons/md";
import { openCalendly } from "@/lib/calendly";

interface Message {
    role: "user" | "bot";
    content: string;
}

const DEFAULT_QUERIES = [
    "How does AI SEO work?",
    "What's included in the $499 plan?",
    "How fast can you launch my page?"
];

const PREDEFINED_ANSWERS: Record<string, string> = {
    "How does AI SEO work?": "AI SEO (Search Engine Optimization) focuses on structuring your content so LLMs like ChatGPT and Google Gemini can easily crawl, understand, and recommend your site as a top answer.",
    "What's included in the $499 plan?": "The $499 package includes a custom high-conversion landing page, AI-optimized content architecture, lead capture setup, and a mobile-first performance-ready design—all delivered in 3-5 days. [BOOK_CALL]",
    "How fast can you launch my page?": "We typically go from initial audit to a fully launched, AI-optimized landing page in just 3 to 5 business days. [BOOK_CALL]"
};

const ChatWindow = ({ onClose }: { onClose: () => void }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi! I'm the RankFlow Assistant. How can I help you optimize your landing page for the AI-first web today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userMessageCount, setUserMessageCount] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage = { role: "user", content: text } as Message;
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setMessages((prev) => [...prev, { role: "bot", content: data.content }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "Sorry, I'm having trouble connecting right now. Please try again or book a call! [BOOK_CALL]" }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderMessage = (m: Message, i: number) => {
        const hasBookCall = m.content.includes("[BOOK_CALL]");
        const cleanContent = m.content.replace("[BOOK_CALL]", "").trim();

        return (
            <div
                key={i}
                className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}
            >
                <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-sans leading-relaxed ${m.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-gray-100 text-black/80 rounded-tl-none border border-black/5"
                        }`}
                >
                    {cleanContent}
                </div>
                {hasBookCall && (
                    <button
                        onClick={() => openCalendly()}
                        className="mt-2 flex items-center gap-2 px-4 py-2 bg-black text-white text-xs font-bold rounded-xl hover:bg-black/80 transition-all shadow-md active:scale-95 animate-in fade-in zoom-in duration-300"
                    >
                        <MdCalendarToday size={14} />
                        Book a Free Call
                    </button>
                )}
            </div>
        );
    };

    return (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-black/5 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <img src="/icon.png" alt="R" className="w-7 h-7 object-contain" />
                </div>
                <div>
                    <h3 className="text-xl font-serif font-semibold">RankFlow Assistant</h3>
                    <p className="text-xs text-blue-100 font-sans opacity-80 mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        Online | AI Powered
                    </p>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide">
                {messages.map((m, i) => renderMessage(m, i))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 px-4 py-2.5 rounded-2xl rounded-tl-none border border-black/5 flex gap-1 items-center">
                            <span className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
                <div className="px-4 py-2 flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {DEFAULT_QUERIES.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => handleSend(q)}
                            className="text-[11px] font-sans font-medium px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-full hover:bg-blue-100 transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-black/5 bg-gray-50/50">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend(input);
                    }}
                    className="flex items-center gap-2 bg-white rounded-2xl border border-black/5 p-1 px-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all"
                >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 text-black border-none py-2 text-sm font-sans focus:outline-none focus:ring-0 placeholder:text-black"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                    >
                        <MdSend size={20} />
                    </button>
                </form>

                {/* Branding */}
                <p className="text-[10px] text-center text-black/70 mt-3 font-sans font-bold uppercase tracking-widest">
                    made by rankflow
                </p>
            </div>
        </div>
    );
};

export default ChatWindow;
