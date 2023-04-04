/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'default': "url('./src/assets/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}
