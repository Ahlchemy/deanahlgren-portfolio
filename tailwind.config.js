/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Deep Ocean Teal (refined: leans more blue, controlled range)
        ocean: {
          50: '#e8f2f7',
          100: '#d1e5ef',
          200: '#a3cbdf',
          300: '#75b1cf',
          400: '#4797bf',
          500: '#0B5570', // Primary - slightly more blue
          600: '#094560',
          700: '#073550',
          800: '#052540',
          900: '#031530',
        },
        // Primary Accent - Burnt Orange/Amber (refined: darker, less saturated, mature)
        amber: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f5dcc1',
          300: '#efc9a2',
          400: '#e4b07a',
          500: '#C87A1A', // Primary - darker, burnt orange
          600: '#A86515',
          700: '#885010',
          800: '#683C0B',
          900: '#482806',
        },
        // Supporting - Dawn (warm neutral, used sparingly)
        dawn: {
          50: '#fef7f0',
          100: '#fdefe1',
          200: '#fbdfc3',
          300: '#f9cfa5',
          400: '#f7bf87',
          500: '#D4915A', // Slightly muted
          600: '#b07a4d',
          700: '#8c6340',
          800: '#684c33',
          900: '#443526',
        },
        // Warm backgrounds
        warm: {
          50: '#FAFAF9',  // Warm off-white
          100: '#F5F5F4', // Slightly darker warm
        },
        // Neutrals
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        display: ['Raleway', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B5570 0%, #094560 50%, #052540 100%)',
        'accent-gradient': 'linear-gradient(135deg, #0B5570 0%, #C87A1A 100%)',
      },
    },
  },
  plugins: [],
}
