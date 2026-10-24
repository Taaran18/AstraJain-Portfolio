import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        paper: v("paper"),
        card: v("card"),
        tint: {
          DEFAULT: v("tint"),
          strong: v("tint-strong"),
        },
        line: {
          DEFAULT: v("line"),
          strong: v("line-strong"),
        },
        fg: {
          DEFAULT: v("fg"),
          muted: v("fg-muted"),
          subtle: v("fg-subtle"),
        },
        gold: {
          DEFAULT: v("gold"),
          soft: v("gold-soft"),
        },
        violet: {
          DEFAULT: v("violet"),
          soft: v("violet-soft"),
        },
        saffron: {
          DEFAULT: v("saffron"),
          soft: v("saffron-soft"),
        },
        brand: {
          DEFAULT: "#d4a843",
          hover: "#e3bb5f",
          deep: "#b88a25",
        },
        night: {
          DEFAULT: "#070a1c",
          800: "#0d1233",
          700: "#161b4a",
        },
        cream: "#fdf8ec",
        success: v("success"),
        danger: v("danger"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.5rem, 1.5rem + 3.6vw, 4.75rem)", { lineHeight: "1.05" }],
        "display-xl": ["clamp(2.25rem, 1.5rem + 3vw, 4rem)", { lineHeight: "1.08" }],
        "display-lg": ["clamp(1.875rem, 1.4rem + 2vw, 3rem)", { lineHeight: "1.12" }],
        "display-md": ["clamp(1.5rem, 1.25rem + 1.2vw, 2.125rem)", { lineHeight: "1.18" }],
        "display-sm": ["clamp(1.125rem, 1.05rem + 0.4vw, 1.375rem)", { lineHeight: "1.3" }],
      },
      maxWidth: {
        content: "96rem",
        prose: "42rem",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(var(--shadow) / 0.05), 0 12px 32px -16px rgb(var(--shadow) / 0.22)",
        lift: "0 2px 4px rgb(var(--shadow) / 0.06), 0 24px 48px -20px rgb(var(--shadow) / 0.35)",
        glow: "0 0 0 1px rgb(212 168 67 / 0.35), 0 10px 40px -10px rgb(212 168 67 / 0.45)",
      },
      backgroundImage: {
        "gold-sheen": "linear-gradient(135deg, #b88a25 0%, #e9c46a 45%, #d4a843 60%, #b88a25 100%)",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
