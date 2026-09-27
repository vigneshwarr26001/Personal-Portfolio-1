import Image from "next/image";

import { Icon } from "@/components/atoms/Icon";
import { SkillBadge } from "@/components/atoms/SkillBadge";
import { Card } from "@/components/ui/Card";
import type { Certification } from "@/types/certification";

export interface CertificationCardProps {
    certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
    return (
        <Card as="article" interactive className="flex h-full flex-col">
            <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary-text">
                    <Icon name="award" size={20} />
                </span>
                <div>
                    <h3 className="text-lg font-semibold text-foreground">{certification.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                        <span className="font-semibold text-foreground">Status:</span>{" "}
                        {certification.status}
                    </p>
                </div>
            </div>

            <p className="mt-5 text-sm font-semibold text-foreground">Focus Areas:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
                {certification.categories.map((category) => (
                    <li key={category}>
                        <SkillBadge name={category} />
                    </li>
                ))}
            </ul>

            {certification.image ? (
                <Image
                    src={certification.image.src}
                    alt={certification.image.alt}
                    width={certification.image.width}
                    height={certification.image.height}
                    sizes="(min-width: 768px) 28rem, 100vw"
                    className="mt-6 h-auto w-full rounded-lg border"
                />
            ) : null}

            {certification.certificateUrl ? (
                <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary-text hover:underline"
                >
                    View certificate
                    <Icon name="external-link" size={14} />
                </a>
            ) : null}
        </Card>
    );
}
