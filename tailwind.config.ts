/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        "outline-variant": "#cfc4c5",
        "secondary": "#5e5e5e",
        "primary": "#000000",
        "on-surface-variant": "#4c4546",
        "surface": "#fcf9f8"
      }
    },
  },
  plugins: [],
}