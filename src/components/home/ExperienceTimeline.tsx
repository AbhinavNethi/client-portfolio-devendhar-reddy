"use client";

import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        company: "TIAA-CREF",
        role: "Senior UI/UX Designer",
        period: "2021 — Present",
        desc: "Leading design capabilities for wealth management platforms, focusing on accessibility and enterprise-scale design systems.",
        metrics: ["Reduced friction by 30%", "WCAG 2.1 Compliance", "Design System Lead"]
    },
    {
        company: "CVS Health",
        role: "UI/UX Designer",
        period: "2019 — 2021",
        desc: "Optimized digital pharmacy flows and member engagement experiences affecting millions of users.",
        metrics: ["98% defect-free releases", "200+ UX issues resolved", "User Testing"]
    },
    {
        company: "Culture Machine",
        role: "UI/UX Designer",
        period: "2018 — 2019",
        desc: "End-to-end product design for web and mobile startups in a fast-paced agile environment.",
        metrics: ["Visual Design", "Prototyping", "Angular/Bootstrap"]
    }
];

export function ExperienceTimeline() {
    return (
        <Section id="experience" size="lg" className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="md:w-1/3 sticky top-24 h-fit">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Experience</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        A track record of delivering high-impact design solutions for Fortune 100 enterprise clients.
                    </p>
                    <Link href="/resume.pdf" target="_blank" className="group inline-flex items-center font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors">
                        Download Full Resume <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="md:w-2/3 flex flex-col gap-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative border-l border-white/10 pl-8 md:pl-12 py-2">
                            <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-foreground transition-colors ring-4 ring-background" />
                            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-3 block opacity-70">{exp.period}</span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">{exp.role}</h3>
                            <div className="text-xl font-medium text-foreground/80 mb-4">{exp.company}</div>
                            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">{exp.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.metrics.map((metric) => (
                                    <span key={metric} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground shadow-sm">
                                        {metric}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
