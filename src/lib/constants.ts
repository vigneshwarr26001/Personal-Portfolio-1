export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
);

export const SECTION_IDS = {
    home: "home",
    about: "about",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    education: "education",
    certifications: "certifications",
    contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
    label: string;
    id: SectionId;
}

export const NAV_ITEMS: NavItem[] = [
    { label: "Home", id: SECTION_IDS.home },
    { label: "About", id: SECTION_IDS.about },
    { label: "Experience", id: SECTION_IDS.experience },
    { label: "Projects", id: SECTION_IDS.projects },
    { label: "Skills", id: SECTION_IDS.skills },
    { label: "Contact", id: SECTION_IDS.contact },
];

export const THEME_STORAGE_KEY = "theme";
