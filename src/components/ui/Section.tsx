import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    size?: "none" | "sm" | "md" | "lg";
}

export function Section({
    className,
    container = true,
    size = "md",
    children,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "w-full",
                {
                    "py-0": size === "none",
                    "py-12 md:py-16": size === "sm",
                    "py-20 md:py-28": size === "md",
                    "py-24 md:py-32": size === "lg",
                },
                className
            )}
            {...props}
        >
            {container ? (
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}
