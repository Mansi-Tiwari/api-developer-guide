/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Roboto Slab", "serif"],
      },
      colors: {
        primaryColor: "#2d3338",
        textColor: "#00df9a",
        designColor: "#ecb501",
        wrapColor: "#rgb(0,0,0,0.7)",
        hoverColor: "#08694b",
      },
    },
  },
  plugins: [],
};
