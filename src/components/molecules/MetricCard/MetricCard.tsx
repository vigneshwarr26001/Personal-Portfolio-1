import { Card } from "@/components/ui/Card";
import type { Achievement } from "@/types/achievement";

export type MetricCardProps = Achievement;

export function MetricCard({ value, label, description }: MetricCardProps) {
    return (
        <Card
            interactive
            className="flex h-full flex-col items-center justify-center px-4 py-7 text-center"
        >
            <p className="text-3xl font-bold text-secondary-text sm:text-4xl">{value}</p>
            <h3 className="mt-2 text-sm font-semibold text-foreground sm:text-base">{label}</h3>
            <p className="mt-1 text-xs text-muted">{description}</p>
        </Card>
    );
}
