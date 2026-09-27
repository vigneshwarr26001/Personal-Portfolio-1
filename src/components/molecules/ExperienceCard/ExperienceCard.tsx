import { Badge } from "@/components/atoms/Badge";
import { Icon } from "@/components/atoms/Icon";
import { SkillBadge } from "@/components/atoms/SkillBadge";
import { Card } from "@/components/ui/Card";
import { Collapsible } from "@/components/ui/Collapsible";
import type { Experience, ExperienceProject } from "@/types/experience";

const VISIBLE_TAGS = 5;

export interface ExperienceCardProps {
    experience: Experience;
}

function ProjectDetails({ project }: { project: ExperienceProject }) {
    return (
        <article className="border-t pt-6 first:border-t-0 first:pt-0">
            {project.categories ? (
                <p className="font-mono text-xs text-primary-text">
                    {project.categories.join(" · ")}
                </p>
            ) : null}
            <h4 className="mt-1.5 text-lg font-semibold text-foreground">{project.name}</h4>
            {project.role ? (
                <p className="mt-0.5 text-sm text-muted">Role: {project.role}</p>
            ) : null}

            {project.highlight ? (
                <p className="mt-4 border-l-2 border-primary pl-4 font-semibold text-foreground">
                    {project.highlight}
                </p>
            ) : null}

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-primary-text sm:text-[0.9375rem]">
                {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {project.achievement ? (
                <p className="mt-5 flex gap-3 rounded-lg bg-amber-500/10 p-4 text-sm text-foreground">
                    <Icon
                        name="award"
                        size={18}
                        className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400"
                    />
                    {project.achievement}
                </p>
            ) : null}
        </article>
    );
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    const visibleTags = experience.tags.slice(0, VISIBLE_TAGS);
    const extraTags = experience.tags.length - visibleTags.length;

    return (
        <Card as="article" className="p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-foreground">{experience.role}</h3>
                {experience.isCurrent ? <Badge variant="success">Current</Badge> : null}
            </div>
            <p className="mt-2 flex items-center gap-2 font-medium text-foreground/90">
                <Icon name="building" size={17} className="text-muted" />
                {experience.company}
            </p>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                    <Icon name="calendar" size={15} />
                    {experience.period}
                </span>
                {experience.location ? (
                    <span className="inline-flex items-center gap-1.5">
                        <Icon name="map-pin" size={15} />
                        {experience.location}
                    </span>
                ) : null}
            </p>

            <p className="mt-5 leading-relaxed text-muted">{experience.summary}</p>

            <ul aria-label="Tools and testing" className="mt-5 flex flex-wrap gap-2">
                {visibleTags.map((tag) => (
                    <li key={tag}>
                        <SkillBadge name={tag} />
                    </li>
                ))}
                {extraTags > 0 ? (
                    <li>
                        <SkillBadge
                            name={`+${extraTags} more`}
                            className="border border-border-strong bg-transparent"
                        />
                    </li>
                ) : null}
            </ul>

            <div className="mt-5">
                <Collapsible
                    expandLabel="Click to expand"
                    collapseLabel="Click to collapse"
                    contentClassName="space-y-6 pt-2 pb-6"
                >
                    {extraTags > 0 ? (
                        <ul aria-label="More tools and testing" className="flex flex-wrap gap-2">
                            {experience.tags.slice(VISIBLE_TAGS).map((tag) => (
                                <li key={tag}>
                                    <SkillBadge name={tag} />
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    {experience.projects.map((project) => (
                        <ProjectDetails key={project.name} project={project} />
                    ))}
                </Collapsible>
            </div>
        </Card>
    );
}
