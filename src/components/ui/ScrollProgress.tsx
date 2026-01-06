"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed bottom-8 right-8 z-50 pointer-events-none origin-center">
            <svg className="w-12 h-12 transform -rotate-90">
                <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-neutral-800"
                />
                <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="125.66"
                    style={{
                        pathLength: pathLength
                    }}
                    className="text-foreground"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
