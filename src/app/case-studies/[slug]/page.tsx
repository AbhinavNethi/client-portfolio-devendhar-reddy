import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { GoogleDriveLink } from "@/components/case-study/GoogleDriveLink";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { CursorResetter } from "@/components/ui/CursorResetter";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return { title: "Not Found" };

    return {
        title: `${study.title} | Devendhar Reddy`,
        description: study.description,
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="bg-background min-h-screen">
            <CursorResetter />
            <Navbar />

            <article className="pt-32 pb-24">
                {/* Back Link */}
                <Section size="none" className="mb-12">
                    <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        <MoveLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>
                </Section>

                {/* Hero */}
                <Section size="none" className="mb-20">
                    <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">{study.category}</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 max-w-5xl text-foreground">
                        {study.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-y border-border/60 py-8">
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Role</span>
                            <span className="font-medium text-lg leading-snug">{study.roles.join(", ")}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Timeline</span>
                            <span className="font-medium text-lg leading-snug">{study.timeline}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Year</span>
                            <span className="font-medium text-lg leading-snug">{study.year}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Tools</span>
                            <span className="font-medium text-lg leading-snug">{study.tools.join(", ")}</span>
                        </div>
                    </div>
                </Section>

                {/* Impact Metrics */}
                <Section size="none" className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {study.impactMetrics.map((metric, i) => (
                            <div key={i} className="p-8 bg-foreground/5 rounded-2xl border border-border/40 flex items-center justify-center text-center">
                                <span className="text-xl md:text-2xl font-bold text-foreground">{metric}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Main Content */}
                <Section size="none" className="max-w-4xl mx-auto">
                    {/* Problem */}
                    <div className="grid md:grid-cols-3 gap-12 pb-32">
                        <h3 className="text-2xl font-bold font-display sticky top-32 h-fit text-foreground/80">The Problem</h3>
                        <div className="md:col-span-2 space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>{study.problemStatement}</p>
                            <ul className="space-y-4 pt-4">
                                {study.businessChallenges.map((c, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                                        <span>{c}</span>
                                    </li>
                                ))}
                                {study.userPainPoints.map((c, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2.5 shrink-0" />
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Process */}
                    <div className="grid md:grid-cols-3 gap-12 pb-32">
                        <h3 className="text-2xl font-bold font-display sticky top-32 h-fit text-foreground/80">UX Process</h3>
                        <div className="md:col-span-2 space-y-16 text-lg text-muted-foreground leading-relaxed">
                            <div className="relative pl-8 border-l border-border/40">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground/30" />
                                <strong className="block text-foreground mb-2 text-xl">Discovery</strong>
                                <p>{study.process.discovery}</p>
                            </div>
                            <div className="relative pl-8 border-l border-border/40">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground/30" />
                                <strong className="block text-foreground mb-2 text-xl">Ideation</strong>
                                <p>{study.process.ideation}</p>
                            </div>
                            <div className="relative pl-8 border-l border-border/40">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-foreground/30" />
                                <strong className="block text-foreground mb-2 text-xl">Testing & Validation</strong>
                                <p>{study.process.testing}</p>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="grid md:grid-cols-3 gap-12 pb-32">
                        <h3 className="text-2xl font-bold font-display sticky top-32 h-fit text-foreground/80">The Solution</h3>
                        <div className="md:col-span-2 space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p className="font-medium text-foreground text-xl">{study.solution}</p>
                        </div>
                    </div>

                    {/* Outcomes */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <h3 className="text-2xl font-bold font-display sticky top-32 h-fit text-foreground/80">Outcomes</h3>
                        <div className="md:col-span-2 space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <ul className="space-y-4">
                                {study.outcomes.map((o, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                                        <span>{o}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </Section>

                <Section size="md">
                    <GoogleDriveLink link={study.googleDriveLink} />
                </Section>

            </article>
            <Footer />
        </main>
    );
}
