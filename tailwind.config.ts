// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,md,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "75ch",
            h1: { fontWeight: "700", letterSpacing: "-0.02em" },
            h2: { marginTop: "2.5rem", marginBottom: "1rem", fontWeight: "700" },
            h3: { marginTop: "2rem", marginBottom: "0.75rem", fontWeight: "600" },
            p: { lineHeight: "1.8" },
            a: { textDecoration: "none", fontWeight: "600" },
            "a:hover": { textDecoration: "underline" },
            ul: { marginTop: "0.5rem", marginBottom: "0.5rem", paddingLeft: "1.25rem" },
            "ul > li": { marginTop: "0.25rem", marginBottom: "0.25rem" },
            table: { width: "100%", display: "table" },
            "thead th": { fontWeight: "700" },
            "tbody td": { verticalAlign: "top" },
            code: { fontWeight: "600" },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
