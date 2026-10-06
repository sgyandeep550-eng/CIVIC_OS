import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eff6ff',
          100: '#dbeafe',
          600: '#1e40af',
          700: '#1e3a8a',
          800: '#1e3566',
          900: '#1e2d5f',
          950: '#0f172a',
        },
        civic: {
          primary: '#1e3a5f',
          secondary: '#0ea5e9',
          accent: '#6366f1',
        }
      }
    }
  },
  plugins: []
} satisfies Config
