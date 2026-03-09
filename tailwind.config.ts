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
        'brand-dark': '#000000',
        'brand-darker': '#050505',
        'brand-coral': '#F4511E',
        'brand-orange': '#E85D07',
      },
      backgroundColor: {
        'primary': '#000000',
        'secondary': '#121212',
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
