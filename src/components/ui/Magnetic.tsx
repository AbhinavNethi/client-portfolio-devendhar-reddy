"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
    children: React.ReactElement;
    strength?: number; // How strong the pull is (higher = moves more)
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();

        // Calculate distance from center
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { type, props } = children;
    const Component = type; // e.g., 'a', 'button', or a React Component

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {/* Clone element to keep semantic structure if possible, though div wrapper is usually safer for transforms */}
            {React.cloneElement(children, {
                // @ts-ignore - cloning to pass events/refs if needed, but wrapper handles motion
            })}
        </motion.div>
    );
}
