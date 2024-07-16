import { THEMES } from "@/types";

export function toggleColorTheme() {
    const themeKey: THEMES = import.meta.env.VITE_THEME_LOCALSTORAGE_KEY as THEMES;
    const oldTheme = (localStorage.getItem(themeKey) as THEMES) ?? THEMES.LIGHT;
    const newTheme = oldTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    document.documentElement.classList.remove(oldTheme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem(themeKey, newTheme);
}
