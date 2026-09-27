import { SkillBadge } from "@/components/atoms/SkillBadge";
import { MetricCard } from "@/components/molecules/MetricCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { Achievement } from "@/types/achievement";
import type { Profile } from "@/types/profile";

export interface AboutProps {
    content: SectionContent;
    profile: Profile;
    achievements: Achievement[];
}

export function About({ content, profile, achievements }: AboutProps) {
    const titleId = sectionTitleId(content.id);
    const { story, learningStatement, experienceAreas, strengths } = profile.about;

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

            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
                <AnimatedSection>
                    <h3 className="text-2xl font-semibold text-foreground">My Story</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-muted">
                        {story.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                        <p className="text-foreground/90">{learningStatement}</p>
                    </div>

                    <p className="mt-6 text-sm font-semibold text-foreground">Experience with</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {experienceAreas.map((area) => (
                            <li key={area}>
                                <SkillBadge name={area} />
                            </li>
                        ))}
                    </ul>

                    <h3 className="mt-12 text-2xl font-semibold text-foreground">What I Bring</h3>
                    <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {strengths.map((strength) => (
                            <Card as="li" key={strength.title} interactive className="p-5">
                                <h4 className="font-semibold text-foreground">{strength.title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    {strength.description}
                                </p>
                            </Card>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection delay={0.1} className="lg:pt-12">
                    <ul className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
                        {achievements.map((achievement) => (
                            <li key={achievement.label}>
                                <MetricCard {...achievement} />
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>
            </div>
        </Section>
    );
}
