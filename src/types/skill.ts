import type { IconName } from "./icon";

export type SkillVariant = "default" | "ai";

export interface SkillCategory {
    id: string;
    title: string;
    icon: IconName;
    skills: string[];
    note?: string;
    variant?: SkillVariant;
}
