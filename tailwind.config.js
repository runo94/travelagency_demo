/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

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
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
      boxShadow: {
        'card': '0px 0px 6px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],
}

