import { ContactForm } from "@/components/molecules/ContactForm";
import { ContactInfo, type ContactItem } from "@/components/molecules/ContactInfo";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { getSocialLinks, sectionTitleId, toMailtoHref, toTelHref } from "@/lib/utils";
import type { Profile } from "@/types/profile";

export interface ContactProps {
    content: SectionContent;
    profile: Profile;
}

export function Contact({ content, profile }: ContactProps) {
    const titleId = sectionTitleId(content.id);
    const socialLinks = getSocialLinks(profile);
    const items: ContactItem[] = [
        { label: "Email", value: profile.email, href: toMailtoHref(profile.email), icon: "mail" },
        { label: "Phone", value: profile.phone, href: toTelHref(profile.phone), icon: "phone" },
        { label: "Location", value: profile.location, icon: "map-pin" },
    ];

    return (
        <Section id={content.id} labelledBy={titleId} tone="alt">
            <AnimatedSection>
                <SectionHeader
                    title={content.title}
                    highlight={content.highlight}
                    description={content.description}
                    titleId={titleId}
                />
            </AnimatedSection>

            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
                <AnimatedSection>
                    <h3 className="text-2xl font-semibold text-foreground">
                        {profile.contact.pitchTitle}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted">{profile.contact.pitch}</p>
                    <ContactInfo items={items} className="mt-8" />

                    {socialLinks.length > 0 ? (
                        <div className="mt-8 border-t pt-8">
                            <p className="font-semibold text-foreground">Connect with me</p>
                            <SocialLinks
                                links={socialLinks}
                                ownerName={profile.name}
                                className="mt-4"
                            />
                        </div>
                    ) : null}
                </AnimatedSection>

                <AnimatedSection delay={0.08}>
                    <Card className="sm:p-8">
                        <h3 className="mb-6 text-2xl font-semibold text-foreground">
                            Send me a message
                        </h3>
                        <ContactForm recipient={profile.email} />
                    </Card>
                </AnimatedSection>
            </div>
        </Section>
    );
}
