import type { Metadata } from "next";

import { education } from "@/data/education";
import { profile } from "@/data/profile";

import { SITE_URL } from "./constants";

export const siteConfig = {
    title: "Enika Palanivel | QA Engineer | Automation Test Engineer",
    description:
        "QA Engineer with 2+ years of experience in manual testing, automation testing, Selenium, Playwright, API testing, mobile testing, CI/CD, and AI/GenAI application testing.",
    keywords: [
        "Enika Palanivel",
        "QA Engineer",
        "Automation Test Engineer",
        "Software Testing",
        "Test Automation",
        "Selenium WebDriver",
        "Playwright",
        "Java",
        "Python",
        "API Testing",
        "Mobile Testing",
        "CI/CD",
        "GenAI Testing",
        "Coimbatore",
    ],
    locale: "en_IN",
};

export function buildMetadata(): Metadata {
    return {
        metadataBase: new URL(SITE_URL),
        title: siteConfig.title,
        description: siteConfig.description,
        keywords: siteConfig.keywords,
        authors: [{ name: profile.name, url: SITE_URL }],
        creator: profile.name,
        applicationName: profile.name,
        category: "portfolio",
        alternates: {
            canonical: "/",
        },
        openGraph: {
            type: "website",
            url: "/",
            title: siteConfig.title,
            description: siteConfig.description,
            siteName: profile.name,
            locale: siteConfig.locale,
        },
        twitter: {
            card: "summary_large_image",
            title: siteConfig.title,
            description: siteConfig.description,
        },
        robots: {
            index: true,
            follow: true,
        },
        formatDetection: {
            telephone: false,
        },
    };
}

export function buildPersonJsonLd(): Record<string, unknown> {
    const [locality, region, country] = profile.location.split(",").map((part) => part.trim());
    const sameAs = [profile.linkedinUrl, profile.githubUrl].filter(Boolean);

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: "QA Engineer",
        description: siteConfig.description,
        url: SITE_URL,
        email: `mailto:${profile.email}`,
        telephone: profile.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: locality,
            addressRegion: region,
            addressCountry: country,
        },
        alumniOf: education.map((item) => ({
            "@type": "CollegeOrUniversity",
            name: item.institution,
        })),
        knowsAbout: profile.heroSkills,
        ...(sameAs.length > 0 ? { sameAs } : {}),
    };
}
