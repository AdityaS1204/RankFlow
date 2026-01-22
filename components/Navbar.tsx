"use client";

import Link from "next/link";
import Image from "next/image";
import { openCalendly } from "@/lib/calendly";

const Navbar = () => {


    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 flex items-center justify-between max-w-7xl mx-auto shadow-sm border border-black/5">
                <Link href="/" className="flex items-center gap-2 ">
                    <Image
                        src={'/icon.png?v=2'}
                        alt="RankFlow Logo"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-lg"
                        unoptimized
                    />
                    <span className="text-xl font-bold tracking-wide text-black font-serif">Rankflow</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/60">
                    <Link href="/#features" className="hover:text-black transition-colors font-sans text-[16px]">Features</Link>
                    <Link href="/#solutions" className="hover:text-black transition-colors font-sans text-[16px]">Solutions</Link>
                    <Link href="/#pricing" className="hover:text-black transition-colors font-sans text-[16px]">Pricing</Link>
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
