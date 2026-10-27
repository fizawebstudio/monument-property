/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#2a2a2a',
          800: '#1f1f1f',
          900: '#171717',
          950: '#0d0d0d',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#faf8f2',
          200: '#F5F2EC',
          300: '#efe9de',
          400: '#e3dccb',
          500: '#D8CFC2',
          600: '#c4b8a4',
          700: '#a89a82',
          800: '#8B8882',
          900: '#6b6862',
        },
        gold: {
          50: '#faf7f0',
          100: '#f3ecd9',
          200: '#e7d8b3',
          300: '#dabd80',
          400: '#c9a455',
          500: '#B59A6A',
          600: '#a0854f',
          700: '#836a3e',
          800: '#6b5532',
          900: '#5a472b',
        },
      },
      fontFamily: {
        /* Manrope — body, UI, nav, buttons, captions */
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        /* Manrope — headings and editorial display */
        display: ['Manrope', 'system-ui', 'sans-serif'],
        /* Keep a sans alias for text */
        serif: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.22em',
        'widest-3': '0.3em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'float-down': 'float-down 2.4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
