"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { openCalendly } from "@/lib/calendly";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            const isScrollingDown = currentY > lastScrollY.current;
            const shouldHide = isScrollingDown && currentY > 80;

            setIsHidden(shouldHide);
            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <nav
            className={`fixed top-[42px] left-0 right-0 z-50 px-4 md:px-8 transition-transform duration-300 ${isHidden ? "-translate-y-24" : "translate-y-0"}`}
        >
            <div className="bg-white/20 backdrop-blur-lg rounded-xl px-6 py-2 flex items-center justify-between max-w-4xl mx-auto border border-white/20 ring-1 ring-black/5">
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

                <button className="flex cursor-pointer items-center justify-center bg-blue-500  text-white text-sm font-sans font-medium px-5 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-colors [box-shadow:inset_0_2px_4px_0_rgb(0_0_0_/_0.6)] text-shadow-sm text-shadow-white/10 ring-1 ring-black/90"
                    onClick={() => openCalendly()}
                >
                    Book a Call
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
