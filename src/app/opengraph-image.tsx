import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "72px",
                background: "#05070A",
                color: "#F2F2F3",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    fontSize: "22px",
                    letterSpacing: "4px",
                    color: "#A1A4AA",
                }}
            >
                {profile.greeting.toUpperCase()}
            </div>
            <div
                style={{
                    display: "flex",
                    marginTop: "16px",
                    fontSize: "96px",
                    fontWeight: 700,
                    backgroundImage: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                    backgroundClip: "text",
                    color: "transparent",
                }}
            >
                {profile.name}
            </div>
            <div style={{ display: "flex", marginTop: "12px", fontSize: "36px", color: "#A1A4AA" }}>
                {profile.title}
            </div>
            <div style={{ display: "flex", marginTop: "36px", fontSize: "26px", color: "#A78BFA" }}>
                {profile.heroSkills.join("  ·  ")}
            </div>
        </div>,
        size,
    );
}
