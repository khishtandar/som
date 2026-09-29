/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#17162c',
          950: '#0d0c1c',
          900: '#121126',
          800: '#1f1d3a',
          700: '#2c2a50',
        },
        cream: {
          DEFAULT: '#faf6ef',
          100: '#f4ece0',
          200: '#e9dcc7',
        },
        brass: {
          200: '#f0dcb4',
          300: '#e3c48b',
          400: '#d3a95a',
          500: '#b98a3e',
          600: '#98712f',
          700: '#7a5a24',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.08)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
        kenburns: 'kenburns 9s ease-out both',
        marquee: 'marquee 90s linear infinite',
      },
    },
  },
  plugins: [],
};
