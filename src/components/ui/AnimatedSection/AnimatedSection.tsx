"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

export interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
    return (
        <m.div
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </m.div>
    );
}
