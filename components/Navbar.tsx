"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isOverDarkSection, setIsOverDarkSection] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            const currentY = window.scrollY;
            const isScrollingDown = currentY > lastScrollY.current;
            const shouldHide = isScrollingDown && currentY > 80;

            setIsHidden(shouldHide);
            lastScrollY.current = currentY;

            const servicesEl = document.getElementById("services");
            if (servicesEl) {
                const rect = servicesEl.getBoundingClientRect();
                const navbarTop = 42;
                const isOver = rect.top <= navbarTop && rect.bottom >= navbarTop;
                setIsOverDarkSection(isOver);
            } else {
                setIsOverDarkSection(false);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        onScroll();

        const timeoutId = setTimeout(onScroll, 100);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <nav
            className={`fixed top-[42px] left-0 right-0 z-50 px-4 md:px-8 transition-transform duration-300 ${isHidden ? "-translate-y-24" : "translate-y-0"}`}
        >
            <div className="rounded-2xl px-6 py-2.5 flex items-center justify-between max-w-5xl mx-auto">
                {/* Logo Section */}
                <div className="shrink-0">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl p-1.5 group-hover:scale-110 transition-transform duration-300">
                            <Image
                                src={'/icon.png?v=2'}
                                alt="RankFlow Logo"
                                width={32}
                                height={32}
                                className={`w-full h-full object-contain transition-all duration-300 ${isOverDarkSection ? "invert" : "invert-0"}`}
                                unoptimized
                            />
                        </div>
                        <span className={`text-xl font-bold tracking-tight font-sans transition-colors duration-300 ${isOverDarkSection ? "text-white" : "text-slate-900"}`}>Rankflow</span>
                    </Link>
                </div>
                <div className="shrink-0">
                    <Link href="/booking" className="flex cursor-pointer items-center justify-center bg-blue-500 text-white text-sm font-sans font-medium px-5 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all [box-shadow:inset_0_2px_4px_0_rgb(255_255_255/0.2),0_4px_12px_-2px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 ring-1 ring-blue-600/50">
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const DropdownItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Link href="#" className="group flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-zinc-100 transition-colors">
        <div className="mt-0.5 p-2 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-blue-600 group-hover:shadow-sm transition-all duration-300">
            {icon}
        </div>
        <div>
            <div className="text-[15px] font-bold text-slate-900 font-sans">{title}</div>
            <div className="text-xs text-slate-500 line-clamp-1 font-sans">{description}</div>
        </div>
    </Link>
);

export default Navbar;


