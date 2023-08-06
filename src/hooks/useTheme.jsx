import { useEffect, useState } from "react";

export default function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        getThemeFromLS();
    }, [setIsDark]);

    const themeHandler = () => {
        if (localStorage.theme === "light") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        getThemeFromLS();
    };

    const getThemeFromLS = () => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    };

    return [isDark, themeHandler];
}
