import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn, isExternalUrl } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline";
export type ButtonSize = "md" | "lg";

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    children: ReactNode;
}

type ButtonAsButton = BaseButtonProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
        href?: undefined;
    };

type ButtonAsLink = BaseButtonProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
        href: string;
    };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border border-border-strong text-foreground hover:bg-surface-muted",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-sm sm:text-base",
};

function buttonClasses({
    variant = "primary",
    size = "md",
    className,
}: Pick<BaseButtonProps, "variant" | "size" | "className">): string {
    return cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60 aria-disabled:cursor-progress aria-disabled:opacity-70",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
    );
}

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
    return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
    if (isLinkProps(props)) {
        const { variant, size, className, children, href, target, rel, ...anchorProps } = props;
        const external = isExternalUrl(href);

        return (
            <a
                href={href}
                target={target ?? (external ? "_blank" : undefined)}
                rel={rel ?? (external ? "noopener noreferrer" : undefined)}
                className={buttonClasses({ variant, size, className })}
                {...anchorProps}
            >
                {children}
            </a>
        );
    }

    const { variant, size, className, children, type = "button", ...buttonProps } = props;

    return (
        <button
            type={type}
            className={buttonClasses({ variant, size, className })}
            {...buttonProps}
        >
            {children}
        </button>
    );
}
