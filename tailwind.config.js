/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base:  "#F5ECE6",  // page background
        sand:  "#CBB8A2",
        cacao: "#3E2E26",
        ink:   "#111111",
        accent:"#3C6CA8"
      },
      fontFamily: {
        display: ['Cormorant Garamond','serif'],
        sans: ['DM Sans','ui-sans-serif','system-ui']
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,.08)" },
      borderRadius: { brand: "1.25rem" }
    },
  },
  plugins: [],
}
