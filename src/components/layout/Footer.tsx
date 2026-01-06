"use client";

import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="bg-foreground text-background py-24 md:py-32 overflow-hidden relative">
            <Section size="none">
                <div className="flex flex-col gap-16 md:gap-24 relative z-10">

                    <div className="flex flex-col gap-8">
                        <span className="text-neutral-400 uppercase tracking-widest text-sm font-medium">Get in Touch</span>
                        <motion.a
                            href="mailto:hello@devendhar.com"
                            className="text-5xl md:text-8xl lg:text-9xl font-display font-bold hover:text-neutral-300 transition-colors flex items-center group w-fit leading-none"
                            whileHover={{ x: 20 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Let's Work <br className="md:hidden" /> Together
                            <MoveRight className="w-12 h-12 md:w-24 md:h-24 ml-4 md:ml-12 opacity-0 group-hover:opacity-100 transition-all -translate-x-8 group-hover:translate-x-0" />
                        </motion.a>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-800 pt-12 gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="font-display font-bold text-2xl">DEVENDHAR REDDY</h3>
                            <p className="text-neutral-400 max-w-xs">
                                Senior UI/UX Designer specialized in building accessible, enterprise-grade digital products.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 md:gap-16">
                            <div className="flex flex-col gap-4">
                                <span className="text-neutral-500 text-sm font-medium">Socials</span>
                                <a href="#" className="text-lg hover:underline underline-offset-4">LinkedIn</a>
                                <a href="#" className="text-lg hover:underline underline-offset-4">Dribbble</a>
                                <a href="#" className="text-lg hover:underline underline-offset-4">Behance</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-neutral-500 text-sm font-medium">Resources</span>
                                <a href="/resume.pdf" className="text-lg hover:underline underline-offset-4">Resume</a>
                                <a href="#" className="text-lg hover:underline underline-offset-4">Case Studies</a>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-neutral-600 flex justify-between items-center w-full">
                        <span>&copy; {new Date().getFullYear()} Devendhar Reddy</span>
                        <span>Designed in Next.js 15 & Tailwind</span>
                    </div>

                </div>
            </Section>
        </footer>
    );
}
