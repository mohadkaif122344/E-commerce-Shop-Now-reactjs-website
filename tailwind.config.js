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
        themeyello: "#f5e60d",
        themepurple: "#502ec3"
      },
    },
  },
  plugins: [],
}

