"use client";

import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-black/5 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">
                                R
                            </div>
                            <span className="text-xl font-bold tracking-tight text-black font-sans">
                                Rankflow
                            </span>
                        </div>
                        <p className="font-sans text-sm text-black/50 leading-relaxed font-medium">
                            High-conversion landing pages built for the next generation of AI search and intent-driven users.
                        </p>
                    </div>

                    {/* Contact & Socials */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-black/30">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="mailto:hello@rankflow.ai"
                                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors font-sans group"
                            >
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                    <MdEmail size={18} />
                                </div>
                                <span className="text-sm font-semibold">rankflow.contact@gmail.com</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors font-sans group"
                            >
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                    <FaLinkedin size={18} />
                                </div>
                                <span className="text-sm font-semibold">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-xs text-black/30 font-medium">
                        &copy; {new Date().getFullYear()} Rankflow. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="font-sans text-xs text-black/30 hover:text-black transition-colors font-medium">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="font-sans text-xs text-black/30 hover:text-black transition-colors font-medium">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
