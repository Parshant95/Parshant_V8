import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        accent: "#e5e5e5",
        muted: "#666666",
        surface: "#111111",
        border: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.28)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      },
      animation: {
        float: "float 14s ease-in-out infinite",
        grain: "grain 10s steps(10) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -18px, 0)" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-3%, 2%)" },
          "40%": { transform: "translate(2%, -3%)" },
          "60%": { transform: "translate(4%, 1%)" },
          "80%": { transform: "translate(-2%, -1%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
