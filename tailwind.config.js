/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/index.html", "./src/js/main.js"],
  theme: {
    colors: {
      'orange': '#EC9A29',
      'green': '#0F8B8D',
      'dark-green': '#143642',
      'white': '#E7E4E6',
      'gray': '#A3A3A3',
      'dark-gray': '#37323E',
    },
    extend: {
      boxShadow: {
        'own-light': '0px 5px 10px rgba(160, 160, 160, 0.25)',
        'own-dark': '0px 5px 10px rgba(30, 30, 30, 0.25);',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
