export type SocialPlatform = "linkedin" | "github" | "email";

export interface SocialLink {
    platform: SocialPlatform;
    label: string;
    href: string;
}

export interface Strength {
    title: string;
    description: string;
}

export interface Profile {
    name: string;
    title: string;
    greeting: string;
    experienceSummary: string;
    tagline: string;
    summary: string;
    heroSkills: string[];
    careerObjective: string;
    location: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    about: {
        story: string[];
        learningStatement: string;
        experienceAreas: string[];
        strengths: Strength[];
    };
    contact: {
        pitchTitle: string;
        pitch: string;
    };
}
