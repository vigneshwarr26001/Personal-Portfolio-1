import { SECTION_IDS, type SectionId } from "@/lib/constants";

export interface SectionContent {
    id: SectionId;
    title: string;
    highlight?: string;
    description: string;
}

type SectionKey = Exclude<keyof typeof SECTION_IDS, "home">;

export const sections: Record<SectionKey, SectionContent> = {
    about: {
        id: SECTION_IDS.about,
        title: "About",
        highlight: "Me",
        description: "A quick look at my QA journey, what I test, and how I approach quality.",
    },
    experience: {
        id: SECTION_IDS.experience,
        title: "Professional Experience",
        description: "Where I've worked and the products I've helped ship with confidence.",
    },
    projects: {
        id: SECTION_IDS.projects,
        title: "Featured",
        highlight: "Projects",
        description: "QA work across tax technology, IRS e-filing, and enterprise migration.",
    },
    skills: {
        id: SECTION_IDS.skills,
        title: "My Skills",
        description: "The testing types, tools, and practices I work with every day.",
    },
    education: {
        id: SECTION_IDS.education,
        title: "Education",
        description: "My academic background.",
    },
    certifications: {
        id: SECTION_IDS.certifications,
        title: "Certifications",
        description: "Certifications and the learning I'm focused on right now.",
    },
    contact: {
        id: SECTION_IDS.contact,
        title: "Let's",
        highlight: "Connect",
        description:
            "I'm open to opportunities in QA Engineering, Test Automation, Software Testing, and AI/GenAI Testing.",
    },
};
