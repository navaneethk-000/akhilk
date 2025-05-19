/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121212',
        primary: '#00ff00',
        secondary: '#333333',
        accent: '#ff3e3e',
        accent2: '#00a2ff',
        darkgray: '#1a1a1a',
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 5px #00ff00, 0 0 10px #00ff00',
        'neon-red': '0 0 5px #ff3e3e, 0 0 10px #ff3e3e',
        'neon-blue': '0 0 5px #00a2ff, 0 0 10px #00a2ff',
      },
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};