import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { ProjectMeta } from "@/components/molecules/ProjectMeta";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/data/sections";
import { sectionTitleId } from "@/lib/utils";
import type { Project } from "@/types/project";

import { ProjectGrid } from "./ProjectGrid";

export interface ProjectsProps {
    content: SectionContent;
    projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Card as="article" interactive className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-xs leading-5 text-primary-text">
                    {project.categories.join(" · ")}
                </p>
                {project.featured ? (
                    <Badge variant="primary">
                        <Icon name="star" size={12} />
                        Featured
                    </Badge>
                ) : null}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{project.highlight}</p>
            {project.additionalHighlights?.map((item) => (
                <p key={item} className="mt-2 leading-relaxed text-muted">
                    {item}
                </p>
            ))}
            <div className="mt-auto pt-6">
                <ProjectMeta
                    role={project.role}
                    technologies={project.technologies}
                    testing={project.testing}
                    className="border-t pt-5"
                />
            </div>
        </Card>
    );
}

export function Projects({ content, projects }: ProjectsProps) {
    const titleId = sectionTitleId(content.id);
    const items = projects.map((project) => ({
        id: project.title,
        featured: Boolean(project.featured),
        card: <ProjectCard project={project} />,
    }));

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
            <ProjectGrid items={items} />
        </Section>
    );
}
