/** @type {import('tailwindcss').Config} */
// rebuild trigger 1
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Kanit"', 'sans-serif'],
      },
      colors: {
        brand: {
          midnight: '#0B162C',
          gold: '#FFC107',
          neon: '#00D4FF',
          slate: '#20325A',
          kinetic: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
}
