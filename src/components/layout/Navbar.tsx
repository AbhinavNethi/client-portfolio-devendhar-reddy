// No client-side functionality needed for this simple header

const navItems = [
    { name: "Work", href: "/#work" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
];

export function Navbar() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neutral-100/50">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between max-w-7xl">
                <a className="text-lg font-bold tracking-tight font-display hover:opacity-80 transition-opacity" href="/">
                    DEVENDHAR REDDY
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors p-2"
                            href={item.href}
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Resume Link */}
                    <a
                        className="inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background hover:opacity-90 h-9 px-4 text-sm"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        Resume
                    </a>
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
