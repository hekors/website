/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "product-manrope": ["Manrope", "sans-serif"],
        "product-bungee": ["Bungee", "cursive"]
      },
      "colors": {
        "product-red": "#FF4E4E",
        "product-pink": "#FF008A",
        "product-orange": "#FF833E",
        "product-purple-dark": "#5B23FA",
        "product-purple-light": "#7C4EFF",
        "product-teal": "#12C0AB",
        "product-yellow": "#FFB800",
        "product-blue": "#4E95FF",
        "product-brown": "#231C18"
      }
    },
  },
  plugins: [],
}