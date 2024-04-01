import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        white: "#fff",
        black: "#000",
        primary: "#A1C5ED",
        secondary: "#69515E",
        third: "#753032",
        fourth: "#6622CC",
        fifth: "#FFA9A3",
        filler: "#A1C5ED",
    },
    screens: {
        xxs: "360px",
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
    },
    },
  },
  plugins: [],
};
export default config;
