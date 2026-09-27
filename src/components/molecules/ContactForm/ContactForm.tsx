"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/atoms/Button";
import { sendContactEmail } from "@/lib/emailjs";
import { cn, toMailtoHref } from "@/lib/utils";

import { FormField } from "./FormField";

type FieldName = "name" | "email" | "subject" | "message";
type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;
type SubmitStatus = "idle" | "invalid" | "sending" | "sent" | "failed";

const FIELD_ORDER: FieldName[] = ["name", "email", "subject", "message"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
    const errors: FormErrors = {};
    if (!values.name) errors.name = "Please enter your name.";
    if (!values.email) errors.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(values.email))
        errors.email = "Please enter a valid email address.";
    if (!values.subject) errors.subject = "Please add a subject.";
    if (!values.message) errors.message = "Please write a message.";
    else if (values.message.length < 10) errors.message = "Please write at least 10 characters.";
    return errors;
}

function isFieldName(value: string): value is FieldName {
    return (FIELD_ORDER as string[]).includes(value);
}

export interface ContactFormProps {
    recipient: string;
}

export function ContactForm({ recipient }: ContactFormProps) {
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const [invalidAttempt, setInvalidAttempt] = useState(0);
    const isSendingRef = useRef(false);
    const isSending = status === "sending";
    const hasErrors = Object.keys(errors).length > 0;

    function handleInput(event: FormEvent<HTMLFormElement>) {
        const target = event.target;
        if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;
        const field = target.name;
        if (!isFieldName(field)) return;
        setErrors((current) => {
            if (!current[field]) return current;
            const next = { ...current };
            delete next[field];
            return next;
        });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (isSendingRef.current) return;

        const form = event.currentTarget;
        const data = new FormData(form);
        const values = Object.fromEntries(
            FIELD_ORDER.map((field) => [field, String(data.get(field) ?? "").trim()]),
        ) as FormValues;

        const nextErrors = validate(values);
        const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
        if (firstInvalid) {
            // Render the error text before moving focus so it is read out with the field.
            flushSync(() => {
                setErrors(nextErrors);
                setStatus("invalid");
                setInvalidAttempt((attempt) => attempt + 1);
            });
            const element = form.elements.namedItem(firstInvalid);
            if (element instanceof HTMLElement) element.focus();
            return;
        }

        setErrors({});
        isSendingRef.current = true;
        setStatus("sending");
        try {
            await sendContactEmail(values);
            form.reset();
            setStatus("sent");
        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("failed");
        } finally {
            isSendingRef.current = false;
        }
    }

    const directEmail = (
        <a
            href={toMailtoHref(recipient)}
            className="font-medium text-primary-text underline underline-offset-4"
        >
            {recipient}
        </a>
    );

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            onInput={handleInput}
            aria-label="Contact form"
            className="grid gap-5"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                    id="name"
                    name="name"
                    label="Name"
                    autoComplete="name"
                    required
                    error={errors.name}
                />
                <FormField
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    autoComplete="email"
                    required
                    error={errors.email}
                />
            </div>
            <FormField
                id="subject"
                name="subject"
                label="Subject"
                required
                error={errors.subject}
            />
            <FormField
                id="message"
                name="message"
                label="Message"
                multiline
                required
                error={errors.message}
            />
            <Button
                type="submit"
                size="lg"
                className="w-full"
                aria-disabled={isSending || undefined}
            >
                {isSending ? (
                    <LoaderCircle size={17} aria-hidden="true" className="animate-spin" />
                ) : (
                    <Send size={17} aria-hidden="true" />
                )}
                {isSending ? "Sending..." : "Send Message"}
            </Button>
            <p
                role="status"
                aria-live="polite"
                className={cn(
                    "text-center text-sm text-muted",
                    status === "sent" && "text-success-text",
                    (status === "failed" || status === "invalid") &&
                        "text-red-600 dark:text-red-400",
                )}
            >
                {status === "invalid" && hasErrors ? (
                    // A new key re-inserts the node so repeat attempts are announced again.
                    <span key={invalidAttempt}>Please fix the highlighted fields.</span>
                ) : null}
                {status === "sending" ? "Sending your message…" : null}
                {status === "sent" ? (
                    <>
                        <span className="font-semibold">Message sent successfully!</span> Thank you
                        for reaching out. I&apos;ll get back to you soon.
                    </>
                ) : null}
                {status === "failed" ? (
                    <>
                        <span className="font-semibold">Error sending message.</span> Please try
                        again or contact me directly at {directEmail}.
                    </>
                ) : null}
            </p>
        </form>
    );
}
