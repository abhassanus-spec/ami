/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#e6f0f0',
          100: '#cce0e0',
          200: '#99c1c1',
          300: '#66a3a3',
          400: '#338484',
          500: '#2D5D5D', // Deep Teal - Main brand color
          600: '#1e4444', // Forest Green - Darker variant
          700: '#193737',
          800: '#142a2a',
          900: '#0f1d1d',
        },
        beige: {
          DEFAULT: '#C9B18A', // Warm Beige - Accent/highlights
          50: '#f9f6f1',
          100: '#f5f1e8', // Soft Cream - Backgrounds
          200: '#ede6d8',
          300: '#dfd2ba',
          400: '#C9B18A',
          500: '#b89968',
          600: '#a88450',
          700: '#8d6d43',
          800: '#73593a',
          900: '#5f4a31',
        },
        charcoal: {
          DEFAULT: '#2C2C2C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
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