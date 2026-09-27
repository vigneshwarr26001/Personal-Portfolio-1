"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, SECTION_IDS, type NavItem } from "@/lib/constants";
import { cn, getInitials, sectionHref } from "@/lib/utils";

export interface NavbarProps {
    name: string;
    items?: NavItem[];
}

const MOBILE_MENU_ID = "mobile-navigation";

export function Navbar({ name, items = NAV_ITEMS }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string>(SECTION_IDS.home);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 16);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );
        items.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [items]);

    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
                isScrolled || isOpen
                    ? "border-border bg-background/85 backdrop-blur-md"
                    : "border-transparent",
            )}
        >
            <Container className="grid h-16 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
                <a
                    href={sectionHref(SECTION_IDS.home)}
                    aria-label={`${name}, back to top`}
                    className="justify-self-start text-gradient text-xl font-bold tracking-tight sm:text-2xl"
                >
                    {getInitials(name)}
                </a>

                <nav aria-label="Primary" className="hidden h-full md:block">
                    <ul className="flex h-full items-center">
                        {items.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <li key={item.id} className="h-full">
                                    <a
                                        href={sectionHref(item.id)}
                                        aria-current={isActive ? "location" : undefined}
                                        className={cn(
                                            "relative flex h-full items-center px-4 text-sm font-medium transition-colors",
                                            "after:absolute after:inset-x-3 after:bottom-2 after:h-0.5 after:rounded-full after:transition-colors",
                                            isActive
                                                ? "text-primary-text after:bg-primary"
                                                : "text-foreground/80 after:bg-transparent hover:text-foreground",
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-1 justify-self-end">
                    <ThemeToggle />
                    <button
                        ref={toggleRef}
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls={MOBILE_MENU_ID}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-muted md:hidden"
                    >
                        {isOpen ? (
                            <X size={20} aria-hidden="true" />
                        ) : (
                            <Menu size={20} aria-hidden="true" />
                        )}
                    </button>
                </div>
            </Container>

            <nav
                id={MOBILE_MENU_ID}
                aria-label="Mobile"
                hidden={!isOpen}
                className="border-t md:hidden"
            >
                <Container className="py-3">
                    <ul className="grid gap-1">
                        {items.map((item) => {
                            const isActive = activeId === item.id;
                            return (
                                <li key={item.id}>
                                    <a
                                        href={sectionHref(item.id)}
                                        onClick={() => setIsOpen(false)}
                                        aria-current={isActive ? "location" : undefined}
                                        className={cn(
                                            "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                            isActive
                                                ? "bg-primary/10 text-primary-text"
                                                : "text-foreground/85 hover:bg-surface-muted",
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </nav>
        </header>
    );
}
