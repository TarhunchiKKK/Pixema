import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                primary: "#7B61FF",
                primary2: "#917CFF",
                secondary: "#80858B",
                dark: "#242426",
                graphite: "#323537",
                context: {
                    error: "#FF5154",
                    light: "#AFB2B6",
                    white: "#AFB2B666",
                },
                tertiary: {
                    green: "#00A340",
                    yellow: "#F3A608",
                    orange: "#F45D2D",
                },
            },
            fontFamily: {
                primary: ["'Exo 2'", "sans-serif"],
            },
            screens: {
                xs: "540px",
                "3xl": "1920px",
            },
            gridTemplateColumns: {
                "1": "repeat(1, auto)",
                "2": "repeat(2, auto)",
                "3": "repeat(3, auto)",
                "4": "repeat(4, auto)",
                "5": "repeat(5, auto)",
            },
        },
    },
    plugins: [],
} satisfies Config;
