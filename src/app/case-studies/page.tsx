"use client";

import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FlowingBackground } from "@/components/ui/FlowingBackground";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
    return (
        <main className="bg-background min-h-screen">
            <FlowingBackground />
            <Navbar />

            <Section size="lg" className="pt-32 pb-24">
                <div className="flex flex-col gap-12">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
                        >
                            Portfolio
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold mb-8"
                        >
                            Case <span className="text-neutral-500">Studies</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            A detailed look into my design process, problem-solving approach,
                            and the impact of my work across enterprise and consumer products.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                            >
                                <CaseStudyCard study={study} index={index} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
