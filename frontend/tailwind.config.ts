import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // White + Red brand system (matched to the Alpha Insight logo)
        "apple-subtle": "#FAFAFA",
        "apple-card": "#FFFFFF",
        obsidian: "#0A0B0E",
        "obsidian-card": "#13151B",
        "obsidian-border": "rgba(255,255,255,0.08)",
        "cyan-glow": "#FF2323",
        "teal-accent": "#FF6B6B",
        "dark-slate": "#1E293B",
        // Pricing surfaces — red primary scale
        primary: "#C00505",
        "on-primary": "#ffffff",
        "primary-container": "#FDE3E3",
        "on-primary-container": "#7A0303",
        "primary-fixed": "#FFC9C9",
        "on-primary-fixed-variant": "#8F0404",
        secondary: "#8F0404",
        "on-secondary": "#ffffff",
        "secondary-container": "#FDECEC",
        "on-secondary-container": "#7A0303",
        "secondary-fixed": "#FFB4B4",
        "secondary-fixed-dim": "#F08080",
        tertiary: "#855300",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#fef3c7",
        "on-tertiary-container": "#4a2c00",
        "tertiary-fixed": "#ffddb8",
        "tertiary-fixed-dim": "#ffb95f",
        outline: "#6e7881",
        "outline-variant": "#cbd5e1",
        surface: "#faf8ff",
        "surface-dim": "#d2d9f4",
        "surface-bright": "#faf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "surface-container-highest": "#94a3b8",
        "on-surface": "#131b2e",
        "on-surface-variant": "#3e4850",
        background: "#faf8ff",
        "on-background": "#131b2e",
        "dark-surface": "#0c0e14",
        "dark-container": "#151922",
        "dark-container-high": "#1e2430",
        "cyan-accent": "#FF4D4D",
        // Legacy palette kept for inner pages
        brand: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          400: "#FF3B3B",
          500: "#ED0A0A",
          600: "#C00505",
        },
        navy: {
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "apple-soft": "0 20px 40px -15px rgba(0,0,0,0.05), 0 0 1px 1px rgba(0,0,0,0.04)",
        "apple-dark": "0 25px 50px -12px rgba(0,0,0,0.7), 0 0 1px 1px rgba(255,255,255,0.08)",
        "glow-cyan": "0 0 30px -5px rgba(237,10,10,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
