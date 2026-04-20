import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/**
 * Brand tokens locked in Brand_Identity_and_Positioning.docx (Section 9).
 * Never hardcode hex values outside this file.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Primary brand
        navy: {
          DEFAULT: "#0B1F3A", // dominant color, visible on every screen
          900: "#081732",
          800: "#0B1F3A",
          700: "#14305A",
          600: "#1F6FB5", // Signal Accent (links, focus, primary CTAs)
          500: "#3A8BD1",
        },
        paper: {
          DEFAULT: "#F7F5EF", // parchment-adjacent, AAR surface
          50: "#FBFAF6",
          100: "#F7F5EF",
          200: "#EDE9DD",
        },
        ink: {
          DEFAULT: "#0F1A2B",
          700: "#334155",
          500: "#64748B",
          300: "#CBD5E1",
        },
        signal: {
          DEFAULT: "#1F6FB5",
          50: "#EAF2FA",
        },
        status: {
          success: "#1F7A4A",
          warning: "#B7791F",
          danger: "#B23A3A",
        },
        // shadcn-compatible semantic tokens (CSS-var-driven)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [typography],
};

export default config;
