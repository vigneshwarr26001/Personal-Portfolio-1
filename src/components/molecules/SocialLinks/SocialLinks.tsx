import { SocialIcon } from "@/components/atoms/SocialIcon";
import { cn, isExternalUrl } from "@/lib/utils";
import type { SocialLink } from "@/types/profile";

export interface SocialLinksProps {
    links: SocialLink[];
    ownerName: string;
    shape?: "square" | "round";
    className?: string;
}

export function SocialLinks({ links, ownerName, shape = "square", className }: SocialLinksProps) {
    if (links.length === 0) return null;

    return (
        <ul className={cn("flex items-center gap-3", className)}>
            {links.map((link) => {
                const external = isExternalUrl(link.href);
                return (
                    <li key={link.platform}>
                        <a
                            href={link.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            aria-label={`${ownerName} on ${link.label}`}
                            title={link.label}
                            className={cn(
                                "inline-flex items-center justify-center text-foreground transition-colors",
                                shape === "square"
                                    ? "h-11 w-11 rounded-lg border hover:border-border-strong hover:bg-surface-muted"
                                    : "h-12 w-12 rounded-full bg-surface-muted hover:text-primary-text",
                            )}
                        >
                            <SocialIcon platform={link.platform} />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
