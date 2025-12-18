import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function SectionContainer({
    children,
    className,
    ...props
}: SectionContainerProps) {
    return (
        <section className={cn("container mx-auto px-4 md:px-6 py-12 md:py-24", className)} {...props}>
            {children}
        </section>
    );
}
