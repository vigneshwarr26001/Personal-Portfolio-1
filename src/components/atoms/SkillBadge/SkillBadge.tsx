import { cn } from "@/lib/utils";

export interface SkillBadgeProps {
    name: string;
    className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground",
                className,
            )}
        >
            {name}
        </span>
    );
}
