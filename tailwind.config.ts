// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // přizpůsob podle projektu
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        button: "var(--button)",
        "button-hover": "var(--button-hover)",
        icon: "var(--icon)",
        contrast: "var(--contrast)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
