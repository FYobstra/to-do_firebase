/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-light" : "#FAFAFA",
        "bg-dark" : "#171823",
        "text-light": "#494C6B",
        "text-dark" : "#C8CBE7",
        "bg-secondary-dark" : "#25273D",
        "bg-secondary-light" : "#FFFFFF"
      }
    },
  },
  plugins: [],
}