import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardElement = "div" | "article" | "li";

export interface CardProps extends HTMLAttributes<HTMLElement> {
    as?: CardElement;
    interactive?: boolean;
    children: ReactNode;
}

export function Card({
    as: Component = "div",
    interactive = false,
    className,
    children,
    ...rest
}: CardProps) {
    return (
        <Component
            className={cn(
                "rounded-xl border bg-surface p-6",
                interactive && "transition-colors duration-200 hover:border-border-strong",
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
}
