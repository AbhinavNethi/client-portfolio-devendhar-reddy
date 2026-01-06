"use client";

import { useEffect } from "react";
import { useCursor } from "@/context/CursorContext";

export function CursorResetter() {
    const { setCursorType, setCursorText } = useCursor();

    useEffect(() => {
        setCursorType("default");
        setCursorText("");
    }, [setCursorType, setCursorText]);

    return null;
}
