import { THEMES } from "@/types";

export function setInitialColorTheme() {
    const themeKey: THEMES = import.meta.env.VITE_THEME_LOCALSTORAGE_KEY as THEMES;
    const currentTheme = localStorage.getItem(themeKey) ?? THEMES.DARK;
    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK);
    document.documentElement.classList.add(currentTheme);
    localStorage.setItem(themeKey, currentTheme);
    return currentTheme;
}
