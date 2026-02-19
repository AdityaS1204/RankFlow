"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdCheckCircle, MdKeyboardArrowDown } from "react-icons/md";

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    buttonText?: string;
    successTitle?: string;
    successDescription?: string;
}

const LeadFormModal = ({
    isOpen,
    onClose,
    title = "Start your AI Audit",
    description = "Enter your details and let's rank your page.",
    buttonText = "Submit Request",
    successTitle = "Message Received!",
    successDescription = "We'll analyze your request and get back to you within 24 hours."
}: LeadFormModalProps) => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        site: "",
        email: "",
        phone: "",
        source: "",
    });
    const [sourceOpen, setSourceOpen] = useState(false);
    const sourceRef = useRef<HTMLDivElement>(null);

    const SOURCE_OPTIONS = [
        { value: "Google", label: "Google" },
        { value: "LinkedIn", label: "LinkedIn" },
        { value: "X", label: "X (Twitter)" },
        { value: "ChatGPT", label: "ChatGPT" },
        { value: "Perplexity", label: "Perplexity" },
        { value: "Other", label: "Other" },
    ];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sourceRef.current && !sourceRef.current.contains(e.target as Node)) {
                setSourceOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({ name: "", site: "", email: "", phone: "", source: "" });
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full bg-black/5 text-black/50 hover:bg-black/10 hover:text-black transition-all"
                >
                    <MdClose size={20} />
                </button>

                {status === "success" ? (
                    <div className="p-12 text-center flex flex-col items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                            <MdCheckCircle size={48} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-black font-semibold">{successTitle}</h3>
                            <p className="text-black/50 font-sans mt-2">
                                {successDescription}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 md:p-12">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-3xl font-serif text-black font-semibold">{title}</h3>
                            <p className="text-black/50 font-sans mt-2">
                                {description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full h-14 px-6 bg-black/3 border border-black/5 rounded-3xl font-sans text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">Website URL</label>
                                <input
                                    required
                                    type="url"
                                    name="site"
                                    value={formData.site}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className="w-full h-14 px-6 bg-black/3 border border-black/5 rounded-3xl font-sans text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full h-14 px-6 bg-black/3 border border-black/5 rounded-3xl font-sans text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full h-14 px-6 bg-black/3 border border-black/5 rounded-3xl font-sans text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Custom Source Dropdown */}
                            <div className="flex flex-col gap-2" ref={sourceRef}>
                                <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">How did you hear about us?</label>
                                {/* Hidden native input to participate in form validation */}
                                <input type="hidden" name="source" value={formData.source} required />
                                <div className="relative">
                                    {/* Trigger button */}
                                    <button
                                        type="button"
                                        onClick={() => setSourceOpen((o) => !o)}
                                        className={`w-full h-14 px-6 pr-12 bg-black/3 border rounded-3xl font-sans text-left transition-all cursor-pointer flex items-center ${sourceOpen
                                            ? "border-blue-500/40 ring-2 ring-blue-500/20 bg-white"
                                            : "border-black/5 hover:bg-black/5"
                                            } ${formData.source ? "text-black" : "text-black/30"}`}
                                    >
                                        <span className="truncate">
                                            {SOURCE_OPTIONS.find((o) => o.value === formData.source)?.label ?? "Select a source"}
                                        </span>
                                        <MdKeyboardArrowDown
                                            size={20}
                                            className={`absolute right-5 top-1/2 -translate-y-1/2 text-black/40 transition-transform duration-200 ${sourceOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown list */}
                                    {sourceOpen && (
                                        <div className="absolute z-50 bottom-full mb-2 w-full bg-white border border-black/8 rounded-3xl shadow-xl shadow-black/8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                                            {SOURCE_OPTIONS.map((option) => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setFormData((prev) => ({ ...prev, source: option.value }));
                                                        setSourceOpen(false);
                                                    }}
                                                    className={`w-full px-6 py-3.5 text-left font-sans text-sm transition-colors ${formData.source === option.value
                                                        ? "bg-blue-50 text-blue-600 font-semibold"
                                                        : "text-black/70 hover:bg-black/4 hover:text-black"
                                                        }`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                disabled={status === "submitting"}
                                type="submit"
                                className="w-full h-16 mt-4 bg-black text-white font-sans font-bold uppercase tracking-widest rounded-3xl hover:bg-black/90 transition-all disabled:opacity-50 active:scale-[0.98] shadow-xl shadow-black/10"
                            >
                                {status === "submitting" ? "Sending Request..." : buttonText}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-xs text-center font-medium">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeadFormModal;
