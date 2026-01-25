"use client";

import React, { useState } from "react";
import { MdChat, MdClose } from "react-icons/md";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(true);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setHasNewMessage(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-100 font-sans">
            {/* Chatbot Button */}
            <button
                onClick={toggleChat}
                className={`flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg transition-all hover:bg-black/80 hover:cursor-pointer active:scale-95 relative ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                    }`}
            >
                <MdChat size={28} />
                {hasNewMessage && !isOpen && (
                    <span className="absolute -top-1 -right-0 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                    </span>
                )}
            </button>

            {/* Close Button (visible when open) */}
            <button
                onClick={toggleChat}
                className={`absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all hover:bg-gray-50 active:scale-95 z-101 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0 pointer-events-none"
                    }`}
            >
                <MdClose size={28} />
            </button>

            {/* Chat Window */}
            {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default Chatbot;
