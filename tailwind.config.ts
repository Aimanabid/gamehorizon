import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   "#2979FF",
          secondary: "#00E5FF",
          purple:    "#7B2FFF",
          royal:     "#1565C0",
          deep:      "#0D47A1",
          dark:      "#050A1A",
          card:      "#0A1428",
          border:    "#1B2A4A",
          glow:      "#00BFFF",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(41,121,255,0.30) 0%, rgba(123,47,255,0.10) 40%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(41,121,255,0.10) 0%, rgba(0,229,255,0.04) 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #2979FF 0%, #00E5FF 100%)",
        "purple-gradient":
          "linear-gradient(135deg, #7B2FFF 0%, #2979FF 100%)",
        "tri-gradient":
          "linear-gradient(135deg, #2979FF 0%, #00E5FF 50%, #7B2FFF 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #050A1A 0%, #0A1428 100%)",
        "shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
      },
      boxShadow: {
        "glow-sm":     "0 0 12px rgba(41,121,255,0.35)",
        "glow":        "0 4px 24px rgba(41,121,255,0.35)",
        "glow-lg":     "0 10px 40px rgba(41,121,255,0.4)",
        "glow-cyan":   "0 4px 24px rgba(0,229,255,0.35)",
        "card":        "0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "pulse-slow":    "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-ring":    "pulse-ring 2s ease-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "shimmer":       "shimmer 2.5s linear infinite",
        "spin-slow":     "spin 12s linear infinite",
        "gradient-shift":"gradient-shift 5s ease infinite",
        "fade-in-up":    "fade-in-up 0.7s ease-out both",
      },
      keyframes: {
        "fade-in-up": {
          "from": { opacity: "0", transform: "translateY(16px)" },
          "to":   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(0.9)", opacity: "0.8" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-shift": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
