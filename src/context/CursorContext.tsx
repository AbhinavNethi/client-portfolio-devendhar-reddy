"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type CursorType = "default" | "pointer" | "text" | "project" | "button" | "scale" | "link";

interface CursorContextType {
    cursorType: CursorType;
    cursorText: string;
    setCursorType: (type: CursorType) => void;
    setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: ReactNode }) {
    const [cursorType, setCursorType] = useState<CursorType>("default");
    const [cursorText, setCursorText] = useState<string>("");

    return (
        <CursorContext.Provider
            value={{
                cursorType,
                cursorText,
                setCursorType,
                setCursorText,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor() {
    const context = useContext(CursorContext);
    if (context === undefined) {
        throw new Error("useCursor must be used within a CursorProvider");
    }
    return context;
}
