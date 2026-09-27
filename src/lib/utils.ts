import type { Profile, SocialLink } from "@/types/profile";

type ClassValue = string | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
    return classes.filter(Boolean).join(" ");
}

export function toTelHref(phone: string): string {
    return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function toMailtoHref(email: string, params?: { subject?: string; body?: string }): string {
    const query = new URLSearchParams();
    if (params?.subject) query.set("subject", params.subject);
    if (params?.body) query.set("body", params.body);
    const search = query.toString().replace(/\+/g, "%20");
    return search ? `mailto:${email}?${search}` : `mailto:${email}`;
}

export function isExternalUrl(href: string): boolean {
    return /^https?:\/\//i.test(href);
}

export function sectionHref(id: string): string {
    return `#${id}`;
}

export function getInitials(name: string): string {
    return name
        .split(/\s+/)
        .map((part) => part[0] ?? "")
        .join("")
        .toUpperCase();
}

export function sectionTitleId(id: string): string {
    return `${id}-title`;
}

export function getSocialLinks(
    profile: Pick<Profile, "linkedinUrl" | "githubUrl" | "email">,
    options: { includeEmail?: boolean } = {},
): SocialLink[] {
    const links: SocialLink[] = [];
    if (profile.linkedinUrl) {
        links.push({ platform: "linkedin", label: "LinkedIn", href: profile.linkedinUrl });
    }
    if (profile.githubUrl) {
        links.push({ platform: "github", label: "GitHub", href: profile.githubUrl });
    }
    if (options.includeEmail) {
        links.push({ platform: "email", label: "Email", href: toMailtoHref(profile.email) });
    }
    return links;
}
