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
        // Brand palette extracted from GH logo
        brand: {
          primary: "#2979FF",    // Electric Blue
          secondary: "#00E5FF",  // Neon Cyan
          royal: "#1565C0",      // Royal Blue
          deep: "#0D47A1",       // Deep Blue
          dark: "#050A1A",       // Site Background
          card: "#0A1628",       // Card Background
          border: "#1A2D5A",     // Border / divider
          glow: "#00BFFF",       // Glow Effect
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-orbitron)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,121,255,0.25) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(41,121,255,0.12) 0%, rgba(0,229,255,0.06) 100%)",
        "blue-gradient": "linear-gradient(135deg, #2979FF 0%, #00E5FF 100%)",
        "dark-gradient": "linear-gradient(180deg, #050A1A 0%, #0A1628 100%)",
        "shine": "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
      },
      boxShadow: {
        "glow-sm": "0 0 12px rgba(41,121,255,0.4)",
        "glow": "0 0 24px rgba(41,121,255,0.5)",
        "glow-lg": "0 0 48px rgba(41,121,255,0.4)",
        "glow-cyan": "0 0 24px rgba(0,229,255,0.5)",
        "card": "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
