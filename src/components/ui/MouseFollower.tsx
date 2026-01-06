"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, Variants } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

export function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const { cursorType, cursorText } = useCursor();

  // Use MotionValues directly for smoother performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor movement
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  const variants: Variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 1,
    },
    pointer: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 1.5,
    },
    button: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 0.8, // Slightly smaller for precision feeling near magnetic buttons
    },
    text: {
      height: 32,
      width: 4, // Cursor becomes a bar
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 1,
    },
    project: {
      height: 120,
      width: 120,
      backgroundColor: "#FFFFFF",
      mixBlendMode: "difference",
      scale: 1,
      color: "#000000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    scale: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 1.5,
    },
    link: {
      height: 16,
      width: 16,
      backgroundColor: "var(--color-foreground)",
      mixBlendMode: "difference",
      scale: 1.5,
    }
  };

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 rounded-full z-[9999] pointer-events-none flex items-center justify-center text-xs font-bold font-display uppercase tracking-widest overflow-hidden",
          cursorType === "project" ? "text-black mix-blend-normal" : "mix-blend-difference" // Project cursor needs to be readable
        )}
        variants={variants}
        animate={cursorType}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          duration: 0.3 // slightly faster for responsiveness
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-black"
          >
            {cursorText || "VIEW"}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
