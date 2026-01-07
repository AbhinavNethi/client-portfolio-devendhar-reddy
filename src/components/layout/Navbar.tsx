"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { useCursor } from "@/context/CursorContext";

const navItems = [
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pathname = usePathname();
    const { setCursorType } = useCursor();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm border-b border-border/40">
            <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between max-w-7xl">
                <Link href="/" className="text-base font-semibold tracking-tight font-display hover:opacity-70 transition-opacity">
                    DEVENDHAR REDDY
                </Link>

                <nav className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <Magnetic key={item.name} strength={0.3}>
                            <Link
                                href={item.href}
                                className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
                                onMouseEnter={() => setCursorType("button")}
                                onMouseLeave={() => setCursorType("default")}
                            >
                                {item.name}
                            </Link>
                        </Magnetic>
                    ))}
                    {/* Resume Link */}
                    <Magnetic strength={0.2}>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="text-sm font-normal text-foreground/70 hover:text-foreground transition-colors"
                            onMouseEnter={() => setCursorType("button")}
                            onMouseLeave={() => setCursorType("default")}
                        >
                            Resume
                        </Link>
                    </Magnetic>
                </nav>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <Button variant="ghost" size="sm">Menu</Button>
                </div>
            </div>
        </header>
    );
}
