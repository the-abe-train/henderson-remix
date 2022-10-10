/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      padding: {
        inside: "1rem max(1rem, 50vw - 896px / 2)"
      },
      fontFamily: {
        header: ['"Merriweather"'],
        sans: ['"Fira Sans"']
      }
    },
  },
  plugins: [],
};