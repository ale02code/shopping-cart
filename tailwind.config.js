/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'oxygen': ['Archivo', 'sans-serif'],
      },
      screens: {
        'mb': { 'max': '732px' }
      },
      transition: {
        'transition-bg': 'background',
        'transition-position-bottom': "bottom"
      },

    },
  },
  plugins: [],
}
