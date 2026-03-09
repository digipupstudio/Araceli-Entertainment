import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'gold': '#D4AF37',
        'gold-dark': '#AA8C2C',
        'brand-dark': '#1a1a1a',
        'brand-darker': '#0f0f0f',
      },
      backgroundColor: {
        'primary': '#1a1a1a',
        'secondary': '#2a2a2a',
        'accent': '#D4AF37',
      },
      textColor: {
        'primary': '#ffffff',
        'secondary': '#b0b0b0',
        'accent': '#D4AF37',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
