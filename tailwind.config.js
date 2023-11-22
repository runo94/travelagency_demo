/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.4rem',
        '6xl': '2.8rem',
        '7xl': '3.2rem',
        '8xl': '3.6rem',
        '9xl': '4rem',
        '10xl': '4.6rem',
      }
    },
  },
  plugins: [],
}

