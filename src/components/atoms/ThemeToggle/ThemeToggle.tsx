"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

import { applyTheme, DEFAULT_THEME } from "@/lib/theme";
import { cn } from "@/lib/utils";

function subscribe(onChange: () => void): () => void {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}

function getSnapshot(): boolean {
    return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): boolean {
    return DEFAULT_THEME === "dark";
}

export interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const label = isDark ? "Switch to light theme" : "Switch to dark theme";

    return (
        <button
            type="button"
            onClick={() => applyTheme(isDark ? "light" : "dark")}
            aria-label={label}
            title={label}
            className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-muted",
                className,
            )}
        >
            {isDark ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
        </button>
    );
}
