/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#75A780",
        "primaryDark": "#51835C",
        "secondary": "#DDDDDD",
        "secondaryLight": "#F2F0F0",
        "black": "#2F2F2F",
        "white": "#FFFFFF"
      }
    },
  },
  plugins: [],
}

