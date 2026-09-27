import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type BadgeVariant = "outline" | "primary" | "success";

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
    outline: "border border-border-strong text-foreground",
    primary: "bg-primary text-white",
    success: "bg-emerald-500/15 text-success-text",
};

export interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

export function Badge({ children, variant = "outline", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap",
                VARIANT_CLASSES[variant],
                className,
            )}
        >
            {children}
        </span>
    );
}
