import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#faf6ee",
        panel: "#f1e9d8",
        panel2: "#e9dfc8",
        ink: "#1f2530",
        muted: "#5b6472",
        gold: "#8a6a1f",
        goldBright: "#8f5510",
        maroon: "#7d2432",
        line: "rgba(60,45,20,0.16)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
