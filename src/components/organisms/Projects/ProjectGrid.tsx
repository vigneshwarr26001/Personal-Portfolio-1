"use client";

import { Star } from "lucide-react";
import { useState, type ReactNode } from "react";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

type ProjectFilter = "all" | "featured";

export interface ProjectGridItem {
    id: string;
    featured: boolean;
    card: ReactNode;
}

export interface ProjectGridProps {
    items: ProjectGridItem[];
}

function FilterButton({
    isActive,
    onClick,
    children,
}: {
    isActive: boolean;
    onClick: () => void;
    children: ReactNode;
}) {
    return (
        <button
            type="button"
            aria-pressed={isActive}
            onClick={onClick}
            className={cn(
                "inline-flex h-10 items-center gap-2 rounded-[10px] px-4 text-sm font-medium transition-colors",
                isActive
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "border bg-background text-foreground hover:bg-surface-muted",
            )}
        >
            {children}
        </button>
    );
}

export function ProjectGrid({ items }: ProjectGridProps) {
    const [filter, setFilter] = useState<ProjectFilter>("all");
    const visible = filter === "featured" ? items.filter((item) => item.featured) : items;

    return (
        <>
            <div
                role="group"
                aria-label="Filter projects"
                className="mt-10 flex justify-center gap-3"
            >
                <FilterButton isActive={filter === "all"} onClick={() => setFilter("all")}>
                    All Projects
                </FilterButton>
                <FilterButton
                    isActive={filter === "featured"}
                    onClick={() => setFilter("featured")}
                >
                    <Star size={16} aria-hidden="true" />
                    Featured
                </FilterButton>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((item, index) => (
                    <li key={item.id}>
                        <AnimatedSection delay={index * 0.06} className="h-full">
                            {item.card}
                        </AnimatedSection>
                    </li>
                ))}
            </ul>
        </>
    );
}
