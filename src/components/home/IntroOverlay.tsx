"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
    const [phase, setPhase] = useState<"initial" | "slide-in" | "zoom" | "complete">("initial");

    useEffect(() => {
        // Sequence
        const sequence = async () => {
            // Phase 1: Slide In
            await new Promise((r) => setTimeout(r, 500));
            setPhase("slide-in");

            // Phase 2: Zoom after slide in finishes
            // Restored delay per user request
            await new Promise((r) => setTimeout(r, 2000));
            setPhase("zoom");

            // Phase 3: Complete callback
            await new Promise((r) => setTimeout(r, 1500));
            setPhase("complete");
            onComplete();
        };

        sequence();
    }, [onComplete]);

    if (phase === "complete") return null;

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={phase === "zoom" ? { opacity: 0, pointerEvents: "none" } : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="relative w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center leading-none">
                    <motion.div
                        initial={{ x: "-100vw" }}
                        animate={
                            phase === "slide-in"
                                ? { x: "0%", scale: 1, opacity: 1 }
                                : phase === "zoom"
                                    ? { x: "0%", scale: 50, opacity: 0 } // Zoom IN massively
                                    : { x: "-100vw", scale: 1, opacity: 1 }
                        }
                        transition={{
                            x: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
                            scale: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
                            opacity: { duration: 0.8, delay: 0.4 }
                        }}
                    >
                        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter text-foreground text-center">
                            DEVENDHAR
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ x: "100vw" }}
                        animate={
                            phase === "slide-in"
                                ? { x: "0%", scale: 1, opacity: 1 }
                                : phase === "zoom"
                                    ? { x: "0%", scale: 50, opacity: 0 } // Zoom IN massively
                                    : { x: "100vw", scale: 1, opacity: 1 }
                        }
                        transition={{
                            x: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
                            scale: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
                            opacity: { duration: 0.8, delay: 0.4 }
                        }}
                    >
                        <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter text-foreground text-center">
                            REDDY
                        </h1>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
