const EMAILJS_SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";

const EMAILJS_CONFIG = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export interface ContactEmailParams {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactEmail({
    name,
    email,
    subject,
    message,
}: ContactEmailParams): Promise<void> {
    const response = await fetch(EMAILJS_SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            service_id: EMAILJS_CONFIG.serviceId,
            template_id: EMAILJS_CONFIG.templateId,
            user_id: EMAILJS_CONFIG.publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                name,
                email,
                subject,
                message,
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`EmailJS responded with ${response.status}: ${await response.text()}`);
    }
}
