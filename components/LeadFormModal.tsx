"use client";

import React, { useState } from "react";
import { MdClose, MdCheckCircle } from "react-icons/md";

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
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

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-black/40 px-3">How did you hear about us?</label>
                                <select
                                    required
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    className="w-full h-14 px-6 bg-black/3 border border-black/5 rounded-3xl font-sans text-black focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1.5rem center',
                                        backgroundSize: '1.25rem'
                                    }}
                                >
                                    <option value="" disabled>Select a source</option>
                                    <option value="Google">Google</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="X">X (Twitter)</option>
                                    <option value="chatgpt">ChatGPT</option>
                                    <option value="perplexity">Perplexity</option>
                                </select>
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
