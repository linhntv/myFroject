/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 5px 4px rgba(0, 0, 0, 0.4)',
        'bxl': '2px 2px 0 2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
