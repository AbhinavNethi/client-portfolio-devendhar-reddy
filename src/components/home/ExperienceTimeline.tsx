"use client";

import { Section } from "@/components/ui/Section";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        company: "Southern Fertility & NEDC",
        role: "UI/UX Designer",
        period: "Sept 2024 — Present",
        desc: "Led end-to-end UX and UI design for web and mobile products, creating user flows, wireframes, and high-fidelity mockups.",
        metrics: ["UX/UI Design", "User Flows", "Web & Mobile"]
    },
    {
        company: "Bee Pvt Ltd. & Reki, Landmark Group India",
        role: "UI/UX Designer",
        period: "July 2023 — Aug 2024",
        desc: "Developed professional flow charts, UI mockups, and presentations in collaboration with product owners and development teams.",
        metrics: ["Flow Charts", "UI Mockups", "Product Strategy"]
    },
    {
        company: "RT Square Pvt Ltd. & DX change",
        role: "UI/UX Designer",
        period: "June 2020 — Nov 2022",
        desc: "Designed e-commerce UX flows and UI mockups for desktop and mobile platforms.",
        metrics: ["E-commerce", "Mobile Design", "Interaction Design"]
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
