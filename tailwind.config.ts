import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#6D28D9",
        primary2: "#7C3AED",
        accent: "#FF6B6B",
        muted: "#6b7280",
        surface: "#f8fafc",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,.08)",
      },
      fontFamily: {
        sans: ["var(--font-iransansxfanum)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
