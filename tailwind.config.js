/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: "#EE632C",
            primaryTransparent: "#ee632cb0",
            secondary: "#019549",
            secondaryTransparent: "#019549c2",
            white: "#ffffff",
            softGray: "#F2F2F2",
            lightGray: "#E9E9E9",
            darkGray: "#A3A1A1",

            danger: "#DE4848",
            warning: "#FE9345",
            success: "#48ABDE",
            transparent: "#0000001c",

            "blue-light": "#98DAFC",
            "green-dark": "#138968c2",
            "green-light": "#23b423",
            "green-yellow": "#C9CD05",
            "orange-light": "#FE934561",
            "red-light": "#FBBCBB",
            "gray-dark": "#273444",
        },
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        extend: {
            spacing: {
                "4xl": "30rem",
                "5xl": "34.375rem",
                "6xl": "40rem",
                "7xl": "60rem",
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            gridRow: {
                "span-10": "span 10 / span 10",
                "span-7": "span 7 / span 7",
            },
        },
    },
    plugins: [],
};
