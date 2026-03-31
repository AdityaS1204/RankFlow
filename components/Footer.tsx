"use client";

import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-black/5 py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6 max-w-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center">
                                <Image
                                    src={'/icon.png?v=2'}
                                    alt="RankFlow Logo"
                                    width={28}
                                    height={28}
                                    className="w-7 h-7 object-contain"
                                    unoptimized
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-black font-serif">
                                Rankflow
                            </span>
                        </div>
                        <p className="font-sans text-sm text-zinc-400 font-medium">
                            Based in India · Available for UK, US & global clients
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex flex-wrap items-center gap-6 md:gap-10">
                        <Link
                            href="mailto:contact@rankflow.in"
                            className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors font-sans text-sm font-semibold group"
                        >
                            <MdEmail className="text-zinc-300 group-hover:text-black transition-colors" size={18} />
                            contact@rankflow.in
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/rankflow-studio/"
                                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors font-sans group"
                        >
                            <FaLinkedin className="text-zinc-300 group-hover:text-black transition-colors" size={18} />
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="md:mt-10 mt-0 pt-1 md:pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-xs text-black/50 font-medium">
                        &copy; {new Date().getFullYear()} Rankflow. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
                        <Link href="/privacy-policy" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">
                            Terms of Service
                        </Link>
                        <Link href="/llms.txt" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">
                            llms.txt
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
