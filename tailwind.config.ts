import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#101E36",
          900: "#101E36",
          800: "#1A2D4E",
          700: "#243C66",
          600: "#2E4B7E",
        },
        // « electric » est rétrogradé en steel neutre (voir DESIGN.md) :
        // l'accent est réservé au gold.
        electric: {
          DEFAULT: "#7E96BF",
          dark: "#5F7AA6",
          light: "#A7BCDD",
          50: "#EEF4FF",
        },
        gold: {
          DEFAULT: "#FFBB0A",
          light: "#FFD147",
          dark: "#E09F00",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
