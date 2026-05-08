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
        electric: {
          DEFAULT: "#5B8DEF",
          dark: "#3B72E0",
          light: "#82AEFF",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #101E36 0%, #1A2D4E 50%, #101E36 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(91, 141, 239, 0.35)",
        "glow-gold": "0 0 40px rgba(255, 187, 10, 0.35)",
        premium: "0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulse_slow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delay-1": "float 9s ease-in-out 1s infinite",
        "float-delay-2": "float 7s ease-in-out 2s infinite",
        "float-delay-3": "float 10s ease-in-out 3s infinite",
        "float-delay-4": "float 6s ease-in-out 4s infinite",
        "float-delay-5": "float 11s ease-in-out 1.5s infinite",
        shimmer: "shimmer 3s linear infinite",
        pulse_slow: "pulse_slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
