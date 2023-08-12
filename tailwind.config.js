/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                green: {
                    100: "#00CC96",
                    10: "#00CC961A",
                },
                blue: {
                    100: "#2975FF",
                    10: "#2975FF1A",
                },
                yellow: {
                    100: "#FFC123",
                    10: "#FFC1231A",
                },
                pink: {
                    100: "#FF66A0",
                    10: "#FF66A01A",
                },
                grey: {
                    1: "#F6F7FB",
                    2: "#1E1E27",
                    3: "#14141B",
                    4: "#2C2C37",
                    dark: {
                        100: "#1A202C",
                        64: "#1A202CA3",
                        40: "#1A202C66",
                        24: "#1A202C3D",
                    },
                    light: {
                        100: "#F7FAFC",
                        64: "#F7FAFCA3",
                        40: "#F7FAFC66",
                        24: "#F7FAFC3D",
                    },
                },
                red: "#FF0000",
                white: "#ffffff",
                black: "#000000",
            },
            fontFamily: {
                "Montserrat-Regular": "Montserrat-Regular",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    tablet: "2.5rem",
                    laptop: "3rem",
                    desktop: "4rem",
                    bigDesktop: "6rem",
                },
            },
        },
        screens: {
            xmobile: "480px",
            mobile: "640px",
            tablet: "768px",
            laptop: "1024px",
            desktop: "1280px",
            bigDesktop: "1440px",
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
