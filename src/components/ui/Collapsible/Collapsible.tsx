"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface CollapsibleProps {
    children: ReactNode;
    expandLabel: string;
    collapseLabel: string;
    contentClassName?: string;
    toggleClassName?: string;
}

export function Collapsible({
    children,
    expandLabel,
    collapseLabel,
    contentClassName,
    toggleClassName,
}: CollapsibleProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();

    return (
        <>
            <div id={contentId} hidden={!isOpen} className={contentClassName}>
                {children}
            </div>
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setIsOpen((open) => !open)}
                className={cn(
                    "mx-auto block w-fit rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-foreground",
                    toggleClassName,
                )}
            >
                {isOpen ? collapseLabel : expandLabel}
            </button>
        </>
    );
}
