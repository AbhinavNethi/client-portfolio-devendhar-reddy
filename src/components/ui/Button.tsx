"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    withArrow?: boolean;
    href?: string;
    target?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", withArrow, children, href, ...props }, ref) => {
        const variants = {
            primary: "bg-foreground text-background hover:opacity-90 border border-transparent",
            secondary: "bg-muted text-white hover:bg-neutral-600 border border-transparent",
            outline: "bg-transparent border border-neutral-300 text-foreground hover:border-foreground",
            ghost: "bg-transparent text-foreground hover:bg-neutral-100",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const classes = cn(
            "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <motion.a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {...(props as any)}
                >
                    {children as React.ReactNode}
                    {withArrow && <MoveRight className="w-4 h-4 ml-1" />}
                </motion.a>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={classes}
                {...props}
            >
                {children as React.ReactNode}
                {withArrow && <MoveRight className="w-4 h-4 ml-1" />}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
