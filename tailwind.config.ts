import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Brand palette
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#EAF0F8",
          100: "#C9D6E8",
          200: "#9FB3D1",
          300: "#6E86B0",
          400: "#3F5784",
          500: "#1E3559",
          600: "#0B1F3A",
          700: "#091831",
          800: "#071226",
          900: "#040C1A",
          950: "#020812",
        },
        gold: {
          DEFAULT: "#CDA45E",
          50: "#FBF7EF",
          100: "#F4E9D2",
          200: "#E9D3A6",
          300: "#DEBD7C",
          400: "#CDA45E",
          500: "#BC8C3F",
          600: "#9C7232",
          700: "#7A582A",
          800: "#5A4120",
          900: "#3B2B16",
        },
        ink: "#1A1A1A",
        cloud: "#F8F9FB",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wider2: "0.18em",
      },
      boxShadow: {
        luxe: "0 30px 80px -30px rgba(11, 31, 58, 0.45)",
        card: "0 18px 50px -24px rgba(11, 31, 58, 0.30)",
        gold: "0 18px 40px -16px rgba(205, 164, 94, 0.55)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(120deg, #CDA45E 0%, #E9D3A6 45%, #BC8C3F 100%)",
        "navy-veil": "linear-gradient(180deg, rgba(11,31,58,0) 0%, rgba(11,31,58,0.55) 55%, rgba(7,18,38,0.92) 100%)",
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 38s linear infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
