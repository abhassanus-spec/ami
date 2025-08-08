/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#e6f0ee',
          100: '#cde1dc',
          200: '#9bc3bb',
          300: '#69a59a',
          400: '#388778',
          500: '#266a5a',
          600: '#1e574b',
          700: '#1a4e42',
          800: '#1C4A40', // Primary color from Aljeroudy logo
          900: '#123530',
          950: '#0a201c',
        },
        beige: {
          DEFAULT: '#D5BEA9', // Accent color from Aljeroudy logo
          50: '#f9f5f2',
          100: '#f3ece5',
          200: '#e9daca',
          300: '#D5BEA9',
          400: '#c2a087',
          500: '#b08669',
          600: '#a07559',
          700: '#85614c',
          800: '#6f5243',
          900: '#5b4439',
          950: '#362821',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};