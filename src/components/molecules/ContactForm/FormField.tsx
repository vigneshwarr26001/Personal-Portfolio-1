import type { HTMLInputTypeAttribute } from "react";

import { cn } from "@/lib/utils";

const CONTROL_CLASSES =
    "block w-full rounded-lg border bg-background px-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export interface FormFieldProps {
    id: string;
    name: string;
    label: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: string;
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    error?: string;
    className?: string;
}

export function FormField({
    id,
    name,
    label,
    type = "text",
    autoComplete,
    required = false,
    multiline = false,
    rows = 6,
    error,
    className,
}: FormFieldProps) {
    const errorId = `${id}-error`;
    const sharedProps = {
        id,
        name,
        required,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
    };
    const controlClasses = cn(
        CONTROL_CLASSES,
        error ? "border-red-500/70" : "border-border hover:border-border-strong",
    );

    return (
        <div className={className}>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
                {label}
                {required ? <span aria-hidden="true"> *</span> : null}
            </label>
            {multiline ? (
                <textarea
                    {...sharedProps}
                    rows={rows}
                    className={cn(controlClasses, "resize-y py-2.5")}
                />
            ) : (
                <input
                    {...sharedProps}
                    type={type}
                    autoComplete={autoComplete}
                    className={cn(controlClasses, "h-10")}
                />
            )}
            {error ? (
                <p id={errorId} className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
