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
        cream: {
          DEFAULT: "#FBF7F0",
          soft: "#F4EEE2",
        },
        ink: {
          DEFAULT: "#1B2A44",
          900: "#141F33",
          800: "#1B2A44",
          700: "#28395A",
          600: "#3B4F78",
        },
        coral: {
          DEFAULT: "#E1613E",
          dark: "#C24A2A",
          light: "#F2A484",
          50: "#FDF0EB",
        },
        gold: {
          DEFAULT: "#C99A3E",
          light: "#E0BA6C",
          dark: "#A97D28",
        },
        sage: {
          DEFAULT: "#4F7A5E",
          light: "#7BA187",
          50: "#EDF3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-fraunces)", "serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(27, 42, 68, 0.06)",
        card: "0 4px 20px rgba(27, 42, 68, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delay-1": "float 9s ease-in-out 1s infinite",
        "float-delay-2": "float 7s ease-in-out 2s infinite",
        "float-delay-3": "float 10s ease-in-out 3s infinite",
        "float-delay-4": "float 6s ease-in-out 4s infinite",
        "float-delay-5": "float 11s ease-in-out 1.5s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
