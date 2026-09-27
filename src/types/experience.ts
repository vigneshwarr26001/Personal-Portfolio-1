export interface ExperienceProject {
    name: string;
    categories?: string[];
    role?: string;
    isCurrent?: boolean;
    highlight?: string;
    achievement?: string;
    responsibilities: string[];
}

export interface Experience {
    company: string;
    role: string;
    location?: string;
    period: string;
    isCurrent?: boolean;
    summary: string;
    tags: string[];
    projects: ExperienceProject[];
}
