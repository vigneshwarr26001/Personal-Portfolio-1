import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Container } from "@/components/ui/Container";
import { SECTION_IDS } from "@/lib/constants";
import { getSocialLinks, sectionHref } from "@/lib/utils";
import type { Profile } from "@/types/profile";

export interface HeroProps {
    profile: Profile;
}

export function Hero({ profile }: HeroProps) {
    const socialLinks = getSocialLinks(profile, { includeEmail: true });

    return (
        <section
            id={SECTION_IDS.home}
            aria-labelledby="hero-title"
            className="relative flex min-h-svh items-center overflow-hidden bg-background bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_60%)] pt-16"
        >
            <Container className="py-20 text-center">
                <SectionLabel>{profile.greeting}</SectionLabel>
                <h1
                    id="hero-title"
                    className="mx-auto mt-4 w-fit text-gradient pb-2 text-5xl leading-tight font-bold tracking-tight sm:text-7xl"
                >
                    {profile.name}
                </h1>
                <p className="mt-2 text-xl font-semibold text-muted sm:text-2xl">{profile.title}</p>

                <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                    {profile.summary}
                </p>

                <div className="mt-10 flex justify-center">
                    <Button href={sectionHref(SECTION_IDS.contact)} size="lg">
                        Get in Touch
                        <Icon name="arrow-right" size={17} />
                    </Button>
                </div>

                <SocialLinks
                    links={socialLinks}
                    ownerName={profile.name}
                    className="mt-8 justify-center"
                />
            </Container>

            <a
                href={sectionHref(SECTION_IDS.about)}
                aria-label="Scroll to About section"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-2 text-muted transition-colors hover:text-foreground"
            >
                <Icon name="arrow-down" size={20} />
            </a>
        </section>
    );
}
