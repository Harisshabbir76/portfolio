/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        surface: "#0d1117",
        surface2: "#0d0d12",
        elevated: "#161b22",
        neon: {
          DEFAULT: "#00ff88",
          dim: "#00e676",
        },
        violet: "#7c3aed",
        ink: {
          DEFAULT: "#e2e8f0",
          muted: "#64748b",
          dim: "#4a5568",
          faint: "#2d3748",
          ghost: "#1e293b",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-space)", "sans-serif"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite reverse",
        scanline: "scanline 8s linear infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -40px)" },
          "66%": { transform: "translate(-20px, 20px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
