import { Icon } from "@/components/atoms/Icon";
import { Collapsible } from "@/components/ui/Collapsible";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types/icon";
import type { SkillCategory } from "@/types/skill";

const VISIBLE_COUNT = 4;
const GRID_CLASSES = "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4";

export interface SkillGroupProps {
    category: SkillCategory;
}

function SkillTile({ name, icon }: { name: string; icon: IconName }) {
    return (
        <li className="flex items-center gap-3 rounded-xl border bg-surface px-4 py-3.5 transition-colors hover:border-border-strong">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-muted text-foreground">
                <Icon name={icon} size={17} />
            </span>
            <span className="text-sm font-semibold text-foreground">{name}</span>
        </li>
    );
}

export function SkillGroup({ category }: SkillGroupProps) {
    const titleId = `skills-${category.id}`;
    const visible = category.skills.slice(0, VISIBLE_COUNT);
    const hidden = category.skills.slice(VISIBLE_COUNT);

    return (
        <div role="group" aria-labelledby={titleId}>
            <div className="flex items-baseline justify-between gap-4 border-b pb-3">
                <h3 id={titleId} className="text-xl font-semibold text-foreground">
                    {category.title}
                </h3>
                <span className="text-sm text-muted">{category.skills.length} skills</span>
            </div>

            <ul className={cn("mt-5", GRID_CLASSES)}>
                {visible.map((skill) => (
                    <SkillTile key={skill} name={skill} icon={category.icon} />
                ))}
            </ul>

            {hidden.length > 0 ? (
                <Collapsible
                    expandLabel={`Click to view all ${category.skills.length} skills`}
                    collapseLabel="Click to show less"
                    toggleClassName="mt-4"
                >
                    <ul className={cn("mt-3", GRID_CLASSES)}>
                        {hidden.map((skill) => (
                            <SkillTile key={skill} name={skill} icon={category.icon} />
                        ))}
                    </ul>
                </Collapsible>
            ) : null}

            {category.note ? (
                <p className="mt-4 text-sm text-muted">
                    <span className="font-semibold text-primary-text">Learning now:</span>{" "}
                    {category.note}
                </p>
            ) : null}
        </div>
    );
}
