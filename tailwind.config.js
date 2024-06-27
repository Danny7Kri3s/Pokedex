/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'quickSand': ['Quicksand', 'sans-serif'],
      },
      backgroundImage: {
        'my-gdDarkGray': 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
        'my-gdWhiteGray': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        'my-darkGrayBg': 'linear-gradient(315deg, #2d3436 0%, #000000 74%)'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

