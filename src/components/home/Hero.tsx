"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { useCursor } from "@/context/CursorContext";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const { setCursorType } = useCursor();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const scrollToWork = () => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section size="none" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl" ref={containerRef}>
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

                    {/* Left: Content */}
                    <div className="w-full md:w-1/2 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }} // Delay matches IntroOverlay
                        >
                            <div className="mb-6 inline-block overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-xl md:text-2xl font-medium text-muted-foreground block"
                                >
                                    Hello, I'm
                                </motion.span>
                            </div>

                            <div className="relative z-20">
                                <h1 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-foreground mb-8">
                                    <span className="block">DEVENDHAR</span>
                                    <span className="block text-foreground/50">REDDY</span>
                                </h1>
                            </div>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                                UI/UX Designer specialized in crafting intuitive e-commerce platforms, enterprise systems, and mobile-first experiences for startups and government digital initiatives.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Magnetic strength={0.2}>
                                    <div onMouseEnter={() => setCursorType("button")} onMouseLeave={() => setCursorType("default")}>
                                        <Button size="lg" withArrow onClick={scrollToWork} className="h-14 px-8 text-lg">
                                            See Selected Work
                                        </Button>
                                    </div>
                                </Magnetic>

                                <Magnetic strength={0.2}>
                                    <div onMouseEnter={() => setCursorType("scale")} onMouseLeave={() => setCursorType("default")}>
                                        <Button variant="outline" size="lg" href="/resume.pdf" target="_blank" className="h-14 px-8 text-lg">
                                            Download Resume
                                        </Button>
                                    </div>
                                </Magnetic>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, filter: "grayscale(100%) blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "grayscale(0%) blur(0px)" }}
                            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                            style={{ y }}
                            className="relative aspect-[3/4] md:aspect-square w-full max-w-lg mx-auto md:mr-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10 mix-blend-overlay opacity-50" />
                            <Image
                                src="/devendhar-reddy.jpg"
                                fill
                                alt="Devendhar Reddy"
                                className="object-cover object-top rounded-2xl shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
