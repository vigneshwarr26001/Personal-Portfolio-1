import type { Certification, ContinuousLearning } from "@/types/certification";

// Add certificateUrl (or an image in /public/images) once available; nothing is shown until then.
export const certifications: Certification[] = [
    {
        title: "GenAI Tools & Build AI Agents for Testing & QA Automation",
        categories: ["Generative AI", "AI Agents", "QA Automation"],
        status: "Completed",
        certificateUrl: "",
    },
];

export const continuousLearning: ContinuousLearning = {
    title: "Continuous Learning",
    text: "Continuously expanding my QA capabilities by learning Generative AI tools, AI agents, and AI-powered approaches to testing and QA automation.",
};
