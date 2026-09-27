import {
    ArrowDown,
    ArrowRight,
    ArrowUp,
    Award,
    Building2,
    Calendar,
    ClipboardCheck,
    Code,
    ExternalLink,
    Gauge,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    Smartphone,
    Sparkles,
    Star,
    Terminal,
    Workflow,
    Wrench,
    type LucideIcon,
    type LucideProps,
} from "lucide-react";

import type { IconName } from "@/types/icon";

const ICONS: Record<IconName, LucideIcon> = {
    "arrow-down": ArrowDown,
    "arrow-right": ArrowRight,
    "arrow-up": ArrowUp,
    award: Award,
    building: Building2,
    calendar: Calendar,
    "clipboard-check": ClipboardCheck,
    code: Code,
    "external-link": ExternalLink,
    gauge: Gauge,
    "graduation-cap": GraduationCap,
    mail: Mail,
    "map-pin": MapPin,
    phone: Phone,
    smartphone: Smartphone,
    sparkles: Sparkles,
    star: Star,
    terminal: Terminal,
    workflow: Workflow,
    wrench: Wrench,
};

export interface IconProps extends Omit<LucideProps, "ref"> {
    name: IconName;
    label?: string;
}

export function Icon({ name, label, size = 20, strokeWidth = 1.75, ...props }: IconProps) {
    const Component = ICONS[name];

    return (
        <Component
            size={size}
            strokeWidth={strokeWidth}
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : true}
            focusable="false"
            {...props}
        />
    );
}
