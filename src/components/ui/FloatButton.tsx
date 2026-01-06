"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "./Magnetic";
import { useCursor } from "@/context/CursorContext";

export function FloatButton() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const { setCursorType } = useCursor();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    className="fixed bottom-8 right-8 z-[60]"
                >
                    <Magnetic strength={0.3}>
                        <button
                            onClick={scrollToTop}
                            onMouseEnter={() => setCursorType("button")}
                            onMouseLeave={() => setCursorType("default")}
                            className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl hover:bg-neutral-200 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </Magnetic>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
