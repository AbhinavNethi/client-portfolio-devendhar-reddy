"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

interface CaseStudyCardProps {
    study: CaseStudy;
    index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
    const { setCursorType, setCursorText } = useCursor();
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <Link
                href={`/case-studies/${study.slug}`}
                className="group block focus:outline-none"
                onMouseEnter={() => {
                    setCursorType("project");
                    setCursorText("VIEW");
                }}
                onMouseLeave={() => {
                    setCursorType("default");
                    setCursorText("");
                }}
            >
                <div className={cn(
                    "relative aspect-[4/3] md:aspect-[16/10] rounded-xl mb-8 overflow-hidden bg-gradient-to-br transition-all duration-500 ease-out border border-neutral-100",
                    study.color,
                    "group-hover:scale-[1.01] group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-focus-visible:ring-2 group-focus-visible:ring-ring"
                )}>
                    {/* Visual Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="w-full h-full bg-white/40 backdrop-blur-sm rounded-lg border border-white/50 flex items-center justify-center shadow-sm">
                            <span className="text-foreground/10 font-display font-bold text-4xl md:text-6xl text-center px-4">
                                {study.title}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-start gap-4">
                    <div>
                        <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block">{study.category} — {study.year}</span>
                        <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight mb-4 group-hover:underline underline-offset-4 decoration-2 decoration-neutral-200 transition-all">{study.title}</h3>
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-6">{study.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {study.roles.map(role => (
                                <span key={role} className="text-xs font-semibold px-2.5 py-1 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-600">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-neutral-200 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300 group-hover:scale-110 shrink-0">
                        <MoveRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
