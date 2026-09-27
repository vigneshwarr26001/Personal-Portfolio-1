import { Icon } from "@/components/atoms/Icon";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { Certification, ContinuousLearning } from "@/types/certification";

import { CertificationCard } from "./CertificationCard";

export interface CertificationsProps {
    content: SectionContent;
    certifications: Certification[];
    learning: ContinuousLearning;
}

export function Certifications({ content, certifications, learning }: CertificationsProps) {
    const titleId = sectionTitleId(content.id);

    return (
        <Section id={content.id} labelledBy={titleId}>
            <AnimatedSection>
                <SectionHeader
                    title={content.title}
                    highlight={content.highlight}
                    description={content.description}
                    titleId={titleId}
                />
            </AnimatedSection>

            <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                {certifications.map((certification) => (
                    <li key={certification.title}>
                        <AnimatedSection className="h-full">
                            <CertificationCard certification={certification} />
                        </AnimatedSection>
                    </li>
                ))}
                <li>
                    <AnimatedSection delay={0.08} className="h-full">
                        <Card as="article" interactive className="h-full">
                            <div className="flex items-start gap-4">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-text">
                                    <Icon name="sparkles" size={20} />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {learning.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted">
                                        {learning.text}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </AnimatedSection>
                </li>
            </ul>
        </Section>
    );
}
