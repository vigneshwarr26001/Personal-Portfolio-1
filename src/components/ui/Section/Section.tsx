import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export interface SectionProps {
    id: string;
    labelledBy?: string;
    tone?: "default" | "alt";
    children: ReactNode;
    className?: string;
}

export function Section({ id, labelledBy, tone = "default", children, className }: SectionProps) {
    return (
        <section
            id={id}
            aria-labelledby={labelledBy}
            className={cn(
                "py-20 sm:py-28",
                tone === "alt" ? "bg-background-alt" : "bg-background",
                className,
            )}
        >
            <Container>{children}</Container>
        </section>
    );
}
