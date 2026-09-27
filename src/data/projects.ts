import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        title: "Tax Notice Management — TaxBandits",
        categories: ["Web Application", "Automation", "AI Testing"],
        role: "Sole QA Engineer",
        featured: true,
        technologies: ["Playwright", "Python", "Jira", "Jenkins", "Git"],
        testing: [
            "Functional",
            "Regression",
            "Smoke",
            "Integration",
            "UAT",
            "UI",
            "E2E",
            "Cross-Browser",
            "Mobile",
            "Performance",
            "AI Feature Testing",
        ],
        highlight: "Owned the complete QA lifecycle from test design through production release.",
    },
    {
        title: "Form 709 — IRS Gift Tax Return",
        categories: ["IRS E-Filing", "Tax Technology", "End-to-End QA"],
        role: "QA Engineer",
        featured: true,
        technologies: [],
        testing: ["Functional", "Regression", "Integration", "UI", "UAT", "E2E"],
        highlight:
            "Supported timely delivery of the Form 709 application within a 2-month timeline and supported the end-to-end IRS filing process.",
        additionalHighlights: [
            "Received appreciation for timely delivery and effective QA support.",
            "Supported post-release operations and collaborated with Marketing teams to support product promotion and feature communication.",
        ],
    },
    {
        title: "SharePoint Migration Validation",
        categories: ["Migration Testing", "Automation"],
        role: "QA Engineer",
        technologies: ["Selenium WebDriver", "Java", "Azure DevOps"],
        testing: ["Functional", "Regression", "Smoke", "SIT", "UAT", "Mobile", "End-to-End"],
        highlight:
            "Reduced manual testing effort by 40% and achieved 100% migration accuracy with zero data loss.",
    },
];
