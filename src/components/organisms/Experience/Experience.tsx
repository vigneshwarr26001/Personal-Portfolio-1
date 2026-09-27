import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { Experience as ExperienceData } from "@/types/experience";

export interface ExperienceProps {
    content: SectionContent;
    items: ExperienceData[];
}

export function Experience({ content, items }: ExperienceProps) {
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

            <ul className="mx-auto mt-14 grid max-w-4xl gap-6">
                {items.map((item) => (
                    <li key={item.company}>
                        <AnimatedSection>
                            <ExperienceCard experience={item} />
                        </AnimatedSection>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
