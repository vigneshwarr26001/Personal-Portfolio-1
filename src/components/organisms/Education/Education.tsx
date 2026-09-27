import { Icon } from "@/components/atoms/Icon";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { Education as EducationData } from "@/types/education";

export interface EducationProps {
    content: SectionContent;
    items: EducationData[];
}

export function Education({ content, items }: EducationProps) {
    const titleId = sectionTitleId(content.id);

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

            <ul className="mx-auto mt-14 grid max-w-3xl gap-6">
                {items.map((item) => (
                    <li key={item.degree}>
                        <AnimatedSection>
                            <Card as="article">
                                <div className="flex items-start gap-4">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-text">
                                        <Icon name="graduation-cap" size={22} />
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                                            {item.degree}
                                        </h3>
                                        <p className="mt-1 font-medium text-muted">
                                            {item.institution}
                                        </p>
                                    </div>
                                </div>
                                <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-2 border-t pt-4 text-sm">
                                    <div className="flex items-center gap-1.5 text-muted">
                                        <dt className="sr-only">Location</dt>
                                        <dd className="flex items-center gap-1.5">
                                            <Icon name="map-pin" size={15} />
                                            {item.location}
                                        </dd>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <dt className="text-muted">{item.scoreLabel}:</dt>
                                        <dd className="font-semibold text-primary-text">
                                            {item.score}/{item.scale}
                                        </dd>
                                    </div>
                                </dl>
                            </Card>
                        </AnimatedSection>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
