import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SkillGroup } from "@/components/molecules/SkillGroup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { SkillCategory } from "@/types/skill";

export interface SkillsProps {
    content: SectionContent;
    categories: SkillCategory[];
}

export function Skills({ content, categories }: SkillsProps) {
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

            <div className="mt-14 space-y-12">
                {categories.map((category) => (
                    <AnimatedSection key={category.id}>
                        <SkillGroup category={category} />
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
}
