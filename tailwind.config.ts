import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cosmic: {
          black:  "#030712",
          navy:   "#0a0f2e",
          deep:   "#0d1340",
          purple: "#1e1b4b",
          violet: "#4c1d95",
          indigo: "#312e81",
          gold:   "#d4a843",
          amber:  "#f59e0b",
          cream:  "#fef9ec",
          silver: "#c0c9e8",
          muted:  "#6b7280",
        },
      },
      fontFamily: {
        cinzel:    ["var(--font-cinzel)", "serif"],
        inter:     ["var(--font-inter)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        // These now use CSS variables so they respond to dark/light
        "cosmic-gradient": "var(--gradient-hero)",
        "section-gradient": "var(--gradient-section)",
        // Static ones unchanged
        "gold-gradient":
          "linear-gradient(135deg, #d4a843 0%, #f59e0b 50%, #d4a843 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(30,27,75,0.8) 0%, rgba(13,19,64,0.9) 100%)",
      },
      animation: {
        twinkle:      "twinkle 3s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "spin-slow":  "spin 20s linear infinite",
        shimmer:      "shimmer 2.5s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%":      { opacity: "1",   transform: "scale(1.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(212,168,67,0.3)" },
          "50%":      { boxShadow: "0 0 30px rgba(212,168,67,0.7)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        "gold-sm": "0 0 10px rgba(212,168,67,0.3)",
        "gold-md": "0 0 20px rgba(212,168,67,0.4)",
        "gold-lg": "0 0 40px rgba(212,168,67,0.5)",
        cosmic:    "0 4px 40px rgba(76,29,149,0.3)",
        "cosmic-lg": "0 8px 60px rgba(76,29,149,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
