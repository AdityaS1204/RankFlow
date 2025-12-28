"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";

interface CTAButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const CTAButton = ({ children, className = "", onClick }: CTAButtonProps) => {
    const { openModal } = useModal();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            openModal();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-[2px] font-sans transition-all active:scale-[0.98] ${className}`}
        >
            {/* Outer Glow / Rim */}
            <span className="absolute inset-0 rounded-full bg-blue-600 transition-all group-hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></span>

            {/* 3D Inner Pill */}
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-blue-400 to-blue-600 px-8 text-lg font-semibold text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] border-t border-white/20">
                <span className="relative z-10">{children}</span>
            </span>
        </button>
    );
};

export default CTAButton;
