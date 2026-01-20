import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function AboutLead() {
    return (
        <Section id="about" size="lg">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-neutral-100 pt-20">
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        Design is not just about how it looks, but how it works for the business and the user.
                    </p>
                </div>

                <div className="md:w-2/3">
                    <div className="prose prose-lg prose-neutral max-w-none mb-12">
                        <p className="text-2xl md:text-4xl font-display font-medium leading-tight mb-12 text-foreground">
                            I simplify complex systems into intuitive interfaces. With a focus on <span className="border-b-2 border-neutral-200 pb-1">accessibility</span> and <span className="border-b-2 border-neutral-200 pb-1">scalability</span>, I build products that serve millions of users.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            My philosophy is simple: <strong className="text-foreground font-medium">Design is clarity.</strong> In enterprise environments, clarity reduces risk and increases efficiency. I don't just design screens; I design systems that empower engineering teams to build faster and better, reducing UI defects by significant margins.
                        </p>
                        <p>
                            From leading design capabilities at Southern Fertility to optimizing digital e-commerce flows for Landmark Group India and RT Square, I take end-to-end ownership—from initial discovery and persona mapping to final pixel-perfect delivery across web and mobile platforms.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
