import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
    title: string;
    highlight?: string;
    description?: string;
    titleId: string;
    className?: string;
}

export function SectionHeader({
    title,
    highlight,
    description,
    titleId,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn("mx-auto max-w-2xl text-center", className)}>
            <h2
                id={titleId}
                className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
                {title}
                {highlight ? (
                    <>
                        {" "}
                        <span className="text-gradient">{highlight}</span>
                    </>
                ) : null}
            </h2>
            {description ? (
                <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
            ) : null}
        </div>
    );
}
