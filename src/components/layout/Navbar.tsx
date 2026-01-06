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
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-100/50">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                <Link href="/" className="text-lg font-bold tracking-tight font-display hover:opacity-80 transition-opacity">
                    DEVENDHAR REDDY
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Magnetic key={item.name} strength={0.3}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2"
                                onMouseEnter={() => setCursorType("button")}
                                onMouseLeave={() => setCursorType("default")}
                            >
                                {item.name}
                            </Link>
                        </Magnetic>
                    ))}
                    {/* Resume Link - Styled as a primary button link manually for now to avoid hydration issues with Button wrapper */}
                    {/* Resume Link */}
                    <Magnetic strength={0.2}>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:opacity-90 h-9 px-4 text-sm"
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
