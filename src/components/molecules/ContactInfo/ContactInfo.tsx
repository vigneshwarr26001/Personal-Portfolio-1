import { Icon } from "@/components/atoms/Icon";
import { cn, isExternalUrl } from "@/lib/utils";
import type { IconName } from "@/types/icon";

export interface ContactItem {
    label: string;
    value: string;
    href?: string;
    icon: IconName;
}

export interface ContactInfoProps {
    items: ContactItem[];
    className?: string;
}

export function ContactInfo({ items, className }: ContactInfoProps) {
    return (
        <ul className={cn("grid gap-4", className)}>
            {items.map((item) => {
                const content = (
                    <>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-text">
                            <Icon name={item.icon} size={19} />
                        </span>
                        <span className="min-w-0">
                            <span className="block font-semibold text-foreground">
                                {item.label}
                            </span>
                            <span className="block truncate text-muted">{item.value}</span>
                        </span>
                    </>
                );
                const cardClasses = "flex items-center gap-4 rounded-xl border bg-surface p-4";

                if (!item.href) {
                    return (
                        <li key={item.label} className={cardClasses}>
                            {content}
                        </li>
                    );
                }

                const external = isExternalUrl(item.href);
                return (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className={cn(
                                cardClasses,
                                "transition-colors hover:border-border-strong",
                            )}
                        >
                            {content}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
