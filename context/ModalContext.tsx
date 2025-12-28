"use client";

import React, { createContext, useContext, useState } from "react";
import LeadFormModal from "@/components/LeadFormModal";

interface ModalContextType {
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <LeadFormModal isOpen={isOpen} onClose={closeModal} />
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
