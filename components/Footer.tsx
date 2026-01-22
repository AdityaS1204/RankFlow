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
                            <div className="w-8 h-8 flex items-center justify-center ">
                                <Image
                                    src={'/icon.png?v=2'}
                                    alt="RankFlow Logo"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 rounded-lg"
                                    unoptimized
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-black font-serif">
                                Rankflow
                            </span>
                        </div>
                        <p className="font-sans text-sm text-black/60 leading-relaxed font-medium">
                            High-conversion landing pages built for the next generation of AI search and intent-driven users.
                        </p>
                    </div>

                    {/* Contact & Socials */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-black/40">Connect</h4>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="mailto:hello@rankflow.ai"
                                className="flex items-center gap-3 text-black/60 hover:text-black transition-colors font-sans group"
                            >
                                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                    <MdEmail size={18} />
                                </div>
                                <span className="text-sm font-semibold">contact@rankflow.in</span>
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
                <div className="md:mt-20 mt-10 pt-1 md:pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-xs text-black/50 font-medium">
                        &copy; {new Date().getFullYear()} Rankflow. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
                        <Link href="#" className="font-sans text-xs text-black/50 hover:text-black transition-colors font-medium">
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

                {/* Giant Glowing Logo */}
                <div className="flex justify-center items-center gap-2 md:-mb-20 -mb-20">
                    <img src="/icon.png" alt="logo" className="md:w-35 md:h-35 lg:w-66 lg:h-63 w-14 h-11" />
                    <h1 className="text-[12vw] md:text-[20vw] lg:text-[300px] font-serif font-bold tracking-wide text-black select-none text-shadow text-shadow-[0_0_30px_rgba(59,130,246,0.3)] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] pointer-events-none">
                        Rankflow
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
