"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-sm">R</div>
                    <span className="text-xl font-bold tracking-tight text-black font-sans">Rankflow</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
                    <Link href="#features" className="hover:text-black transition-colors">Features</Link>
                    <Link href="#solutions" className="hover:text-black transition-colors">Solutions</Link>
                    <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
                </div>

                <button className="bg-black text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-black/80 transition-colors shadow-lg shadow-black/10">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
