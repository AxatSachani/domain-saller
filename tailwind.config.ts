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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "accent-purple": "#8b5cf6",
        "accent-cyan": "#06b6d4",
        "accent-pink": "#ec4899",
        "dark-card": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient': 'gradientShift 8s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'orb-1': 'orb-float-1 15s ease-in-out infinite',
        'orb-2': 'orb-float-2 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
