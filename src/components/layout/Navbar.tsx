"use client";

import { Magnetic } from "@/components/ui/Magnetic";
import { useCursor } from "@/context/CursorContext";

const navItems = [
    { name: "Work", href: "/case-studies" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
];

export function Navbar() {
    const { setCursorType } = useCursor();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-100/50">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                <a className="text-lg font-bold tracking-tight font-display hover:opacity-80 transition-opacity" href="/">
                    DEVENDHAR REDDY
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Magnetic key={item.name} strength={0.2}>
                            <div onMouseEnter={() => setCursorType("button")} onMouseLeave={() => setCursorType("default")}>
                                <a
                                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors p-2"
                                    href={item.href}
                                >
                                    {item.name}
                                </a>
                            </div>
                        </Magnetic>
                    ))}
                    {/* Resume Link */}
                    <Magnetic strength={0.2}>
                        <div onMouseEnter={() => setCursorType("button")} onMouseLeave={() => setCursorType("default")}>
                            <a
                                className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:opacity-90 h-9 px-4 text-sm"
                                href="/resume.pdf"
                                target="_blank"
                            >
                                Resume
                            </a>
                        </div>
                    </Magnetic>
                </nav>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground hover:bg-neutral-100 h-9 px-4 text-sm" tabIndex={0}>
                        Menu
                    </button>
                </div>
            </div>
        </header>
    );
}
