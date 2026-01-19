"use client";

import Link from "next/link";
import Image from "next/image";
import { openCalendly } from "@/lib/calendly";

const Navbar = () => {


    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <Image
                        src={'/icon.png?v=2'}
                        alt="RankFlow Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-lg"
                        unoptimized
                    />
                    <span className="text-xl font-bold tracking-tight text-black font-sans">Rankflow</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
                    <Link href="#features" className="hover:text-black transition-colors font-sans text-[16px]">Features</Link>
                    <Link href="#solutions" className="hover:text-black transition-colors font-sans text-[16px]">Solutions</Link>
                    <Link href="#pricing" className="hover:text-black transition-colors font-sans text-[16px]">Pricing</Link>
                </div>

                <button className="flex cursor-pointer items-center justify-center bg-blue-500  text-white text-sm font-sans font-medium px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors [box-shadow:inset_0_2px_4px_0_rgb(0_0_0_/_0.6)] text-shadow-sm text-shadow-white/10 ring-1 ring-black/90"
                onClick={() => openCalendly()}
                >
                    Book a Call
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
