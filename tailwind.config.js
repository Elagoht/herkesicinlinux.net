/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
        mono: ["Fira Code", "monospace"]
      },
      screens: {
        "xs": "512px"
      },
      content: {
        empty: "\"\"",
        locate: "url('/src/assets/design/locate.png')",
      },
      colors: {
        bronze: {
          50: "#f7f4f2",
          100: "#efe9e5",
          200: "#dfd3cb",
          300: "#cfbcb1",
          400: "#bfa697",
          500: "#af907d",
          600: "#8c7364",
          700: "#69564b",
          800: "#463a32",
          900: "#231d19"
        }
      },
      backgroundImage: {
        metacity: "url('/src/assets/design/metacity.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
