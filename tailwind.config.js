/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
        colors: {
        primaryA: "#FFBE34",
        primaryB: "#091242",
        secondaryA: "#F4F4F4",
        secondaryB: "#111C55",
        hover: "rgba(17,28,85,.5)",
        borderColor: "rgba(39, 50, 112, 1)"
      },
      backgroundImage: {
        background: "url('./assets/background.png')",
      },
      screens: {
        vs: "400px",
        vl: "1010px"
      }
    },
  },
  plugins: [],
}

