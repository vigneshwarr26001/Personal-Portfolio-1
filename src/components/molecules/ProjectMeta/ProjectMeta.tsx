import { SkillBadge } from "@/components/atoms/SkillBadge";
import { cn } from "@/lib/utils";

export interface ProjectMetaProps {
    role: string;
    technologies?: string[];
    testing?: string[];
    className?: string;
}

export function ProjectMeta({
    role,
    technologies = [],
    testing = [],
    className,
}: ProjectMetaProps) {
    return (
        <div className={cn("space-y-4", className)}>
            <p className="text-sm text-muted">
                <span className="font-semibold text-foreground">Role:</span> {role}
            </p>
            {testing.length > 0 ? (
                <p className="text-sm leading-relaxed text-muted">
                    <span className="font-semibold text-foreground">Testing:</span>{" "}
                    {testing.join(", ")}
                </p>
            ) : null}
            {technologies.length > 0 ? (
                <ul aria-label="Technologies" className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <li key={technology}>
                            <SkillBadge name={technology} />
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
