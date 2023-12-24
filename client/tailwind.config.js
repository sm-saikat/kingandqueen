/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        "helvetica-neue": ["HelveticaNeue", "sans-serif"],
        "roboto-con": ["Roboto Condensed", "sans-serif"],
      },

      colors: {
        primary: '#C81D31',
        secondary: '#000000'
      }
    },
  },
  plugins: [],
};
