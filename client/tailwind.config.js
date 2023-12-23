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
    },
  },
  plugins: [],
};
