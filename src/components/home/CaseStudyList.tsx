"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "@/data/case-studies";

export function CaseStudyList() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <div ref={targetRef} id="work" className="relative h-[300vh] bg-neutral-900 text-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden py-20">
                <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24 items-center">

                    {/* Header Card */}
                    <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center">
                        <h2 className="text-6xl md:text-9xl font-display font-bold mb-6">Selected <br /><span className="text-neutral-500">Work</span></h2>
                        <p className="text-xl text-neutral-400 max-w-md">
                            Horizontal exploration of key projects solving enterprise complexity.
                        </p>
                    </div>

                    {caseStudies.map((study, index) => (
                        <div key={study.slug} className="min-w-[85vw] md:min-w-[60vw]">
                            <CaseStudyCard study={study} index={index} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
