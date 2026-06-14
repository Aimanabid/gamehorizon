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
          primary:   "#2979FF",   // Electric Blue
          secondary: "#00E5FF",   // Neon Cyan
          purple:    "#7B2FFF",   // Neon Purple accent
          royal:     "#1565C0",   // Royal Blue
          deep:      "#0D47A1",   // Deep Blue
          dark:      "#050A1A",   // Site Background
          card:      "#060D20",   // Card Background (darker)
          border:    "#162040",   // Border / divider
          glow:      "#00BFFF",   // Glow Effect
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 90% 70% at 50% -10%, rgba(41,121,255,0.35) 0%, rgba(123,47,255,0.15) 40%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(41,121,255,0.10) 0%, rgba(0,229,255,0.04) 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #2979FF 0%, #00E5FF 100%)",
        "purple-gradient":
          "linear-gradient(135deg, #7B2FFF 0%, #2979FF 100%)",
        "tri-gradient":
          "linear-gradient(135deg, #2979FF 0%, #00E5FF 50%, #7B2FFF 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #050A1A 0%, #060D20 100%)",
        "shine":
          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
        "hex-bg":
          "radial-gradient(circle at center, rgba(41,121,255,0.12) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-sm":     "0 0 12px rgba(41,121,255,0.5)",
        "glow":        "0 0 28px rgba(41,121,255,0.55)",
        "glow-lg":     "0 0 60px rgba(41,121,255,0.45)",
        "glow-cyan":   "0 0 28px rgba(0,229,255,0.55)",
        "glow-purple": "0 0 28px rgba(123,47,255,0.5)",
        "neon":        "0 0 5px #2979FF, 0 0 20px #2979FF, 0 0 40px rgba(41,121,255,0.5)",
        "card":        "0 4px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "pulse-slow":    "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-ring":    "pulse-ring 2s ease-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "shimmer":       "shimmer 2.5s linear infinite",
        "spin-slow":     "spin 12s linear infinite",
        "glitch":        "glitch 6s infinite",
        "glitch2":       "glitch2 6s infinite",
        "scan-line":     "scan-line 3s linear infinite",
        "neon-flicker":  "neon-flicker 4s infinite",
        "circuit-flow":  "circuit-flow 4s ease-in-out infinite",
        "gradient-shift":"gradient-shift 5s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
