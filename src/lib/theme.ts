import { THEME_STORAGE_KEY } from "./constants";

export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "dark";

export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s?s==="dark":${DEFAULT_THEME === "dark"};var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Storage can be blocked (private mode); the theme still applies for this visit.
    }
}
