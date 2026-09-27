import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Container } from "@/components/ui/Container";
import { SECTION_IDS } from "@/lib/constants";
import { getSocialLinks, sectionHref } from "@/lib/utils";
import type { Profile } from "@/types/profile";

export interface FooterProps {
    profile: Profile;
}

export function Footer({ profile }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <Container className="flex flex-col items-center py-14 text-center">
                <p className="text-gradient text-2xl font-bold">{profile.name}</p>
                <p className="mt-3 max-w-md text-muted">{profile.tagline}</p>
                <SocialLinks
                    links={getSocialLinks(profile, { includeEmail: true })}
                    ownerName={profile.name}
                    shape="round"
                    className="mt-8 justify-center"
                />
                <Button href={sectionHref(SECTION_IDS.home)} variant="outline" className="mt-8">
                    <Icon name="arrow-up" size={16} />
                    Back to Top
                </Button>
            </Container>
            <Container>
                <p className="border-t py-8 text-center text-sm text-muted">
                    © {year} {profile.name}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
