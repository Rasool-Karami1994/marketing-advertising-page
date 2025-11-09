import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F7BFF",
          50: "#EFF6FF",
          100: "#DBEAFE",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        text: {
          primary: "#0E0E0E",
          muted: "#6B7280",
        },
        surface: "#FFFFFF",
        danger: "#EF4444",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1200px" },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,.08)",
      },

      fontFamily: {
        sans: ["var(--font-iransansxfanum)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
