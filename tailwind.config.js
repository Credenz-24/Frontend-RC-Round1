/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mediumturquoise: "#52e6e8",
        lightseagreen: "#00b0b0",
        darkcyan: "#038870",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "red-hat-display": "'Red Hat Display'",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
  },
  plugins: [],
}

