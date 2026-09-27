import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Open_Sans } from "next/font/google";

import { MotionProvider } from "@/components/ui/AnimatedSection";
import { buildMetadata } from "@/lib/seo";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { cn } from "@/lib/utils";

import "./globals.css";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
    themeColor: "#05070a",
    colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn(openSans.variable, jetBrainsMono.variable, "dark antialiased")}
            suppressHydrationWarning
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
            </head>
            <body className="min-h-dvh bg-background text-foreground">
                <a
                    href="#main-content"
                    className="sr-only rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60"
                >
                    Skip to main content
                </a>
                <MotionProvider>{children}</MotionProvider>
            </body>
        </html>
    );
}
