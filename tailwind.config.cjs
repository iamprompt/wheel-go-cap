const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addBase, config }) {
      const newUtilities = {
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
      }
      addUtilities(newUtilities)
      // addBase({
      //   h1: { fontFamily: config('theme.fontFamily.sarabun-medium') },
      //   body: { fontFamily: config('theme.fontFamily.body') },
      // })
    }),
  ],
}

module.exports = config
