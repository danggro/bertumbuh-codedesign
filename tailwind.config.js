/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "ui-system"],
    },
    extend: {
      colors: {
        black: "#272727",
        primary: "#2A9D8F",
        secondary: "#656565",
      },
    },
  },
  plugins: [],
};
