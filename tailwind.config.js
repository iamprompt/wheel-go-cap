// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    fontFamily: {
      sans: ['LINE Seed Sans TH', 'sans-serif'],
    },
    extend: {
      colors: {
        app: {
          white: '#FFFFFF',
          black: '#000000',
          green: '#08CE57',
        },
        gray: {
          100: '#F6F8FC',
          200: '#F1F4F9',
          300: '#E2E8F0',
          400: '#CBD4E1',
          500: '#94A3B8',
          600: '#64748B',
          700: '#475569',
          800: '#27364B',
          900: '#1E2A3B',
          1000: '#0F1A2A',
        },
        brand: {
          muictVerdian: '#006C6C',
          muictCream: '#FFFFC9',
          mahidolBlue: '#32528E',
          mahidolCrown: '#F8C242',
          mahidolShield: '#A6853E',
        },
        theme: {
          black: '#000000',
          darkMagenta: '#1B052F',
          magenta: '#6A11B1',
          unhover: '#D1CFCF',
          divider: '#F3F1F1',
          description: '#989898',
          smokeWhite: '#F8F8F8',
          white: '#FFFFFF',
        },
        qac: {
          magenta: '#6A11B1',
          lessMagenta: '#6233BB',
          quiteBlue: '#5E60C6',
          blueSky: '#65A6D9',
          almostCyan: '#6BBEDF',
          cyan: '#78CCDD',
          mint: '#93EBDD',
          lightMint: '#A1FCDD',
        },
        success: {
          100: '#E8FCF1',
          200: '#A5E1BF',
          400: '#419E6A',
          600: '#00632B',
          800: '#00401C',
          1000: '#002611',
        },
        info: {
          100: '#D3E1FE',
          200: '#7EA5F8',
          400: '#4D82F3',
          600: '#2563EB',
          800: '#0037B3',
          1000: '#002987',
        },
        warning: {
          100: '#FFF5D5',
          200: '#FFDE81',
          400: '#EFB008',
          600: '#976400',
          800: '#724B00',
          1000: '#4D2900',
        },
        error: {
          100: '#FFEBEB',
          200: '#FC9595',
          400: '#D83232',
          600: '#B01212',
          800: '#8C0000',
          1000: '#660000',
        },
        pink: {
          100: '#FFF2F6',
          200: '#FFBED4',
          400: '#E86993',
          600: '#CB3668',
          800: '#A61C4A',
          1000: '#750A2E',
        },
        purple: {
          100: '#F5E8FF',
          200: '#D8AAFD',
          400: '#AC54F0',
          600: '#8219D4',
          800: '#530094',
          1000: '#320059',
        },
        indigo: {
          100: '#EDECFF',
          200: '#B0A9FF',
          400: '#7A6DFF',
          600: '#4032DC',
          800: '#0E00AB',
          1000: '#0A0075',
        },
        cyan: {
          100: '#EAFAFF',
          200: '#9FDBEF',
          400: '#41ADD1',
          600: '#007EA8',
          800: '#006182',
          1000: '#004157',
        },
        lime: {
          100: '#F9FFEA',
          200: '#D8EE9B',
          400: '#97B544',
          600: '#638404',
          800: '#486300',
          1000: '#354800',
        },
        salmon: {
          100: '#FFEFEA',
          200: '#FFB199',
          400: '#F47048',
          600: '#CF4920',
          800: '#A82700',
          1000: '#621700',
        },
      },
      boxShadow: {
        small:
          '0px 1px 7px -1px rgba(9, 30, 66, 0.25), 0px 0px 2px -13px rgba(9, 30, 66, 0.2)',
        medium:
          '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
        large:
          '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
        xLarge:
          '0px 18px 28px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #6A11B1 0%, #78CCDD 100%);',
        'brand-gradient-to-r':
          'linear-gradient(107.36deg, #6A11B1 9.81%, #78CCDD 91.69%)',
        'brand-gradient-to-l':
          'linear-gradient(270deg, #5E60C6 0%, #A1FCDD 100%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top, 16px)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom, 16px)',
        },
        '.safe-all': {
          paddingTop: 'env(safe-area-inset-top, 16px)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
          paddingBottom: 'env(safe-area-inset-bottom, 16px)',
        },
        '.safe-y': {
          paddingTop: 'env(safe-area-inset-top, 16px)',
          paddingBottom: 'env(safe-area-inset-bottom, 16px)',
        },
        '.safe-x': {
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
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
