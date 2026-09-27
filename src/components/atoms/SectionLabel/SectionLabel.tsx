import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionLabelProps {
    children: ReactNode;
    className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
    return (
        <p className={cn("text-sm font-medium tracking-[0.12em] text-muted uppercase", className)}>
            {children}
        </p>
    );
}
