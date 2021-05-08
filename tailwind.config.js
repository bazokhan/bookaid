/* eslint-disable @typescript-eslint/no-var-requires */
const scrollbarPlugin = require('tailwind-scrollbar');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        main: {
            1: '#EAEAEA',
          2: '#D2E8F2',
          3: '#B2ACAC',
          4: '#07ABBF',
          5: '#0081CC',
          6: '#151F4E',
          7: '#001E3B',
          8: '#E65030',
        },
        bg: {
          100: '#FFFFFF',
          200: '#F3F3F3',
          300: '#E3E3E3',
          400: '#CCCCCC',
          600: '#999999',
          700: '#202020',
          800: '#060707',
          900: '#000000'
        },
        error: '#EB4D4D'
      },
      fontFamily: {
        sans: ['MarkPro', ...defaultTheme.fontFamily.sans]
      },
      cursor: {
        grab: 'grab'
      },
      borderRadius: {
        default: '10px'
      },
      gridColumn: {
        '1/1': '1 / 1',
        '1/2': '1 / 2',
        '1/3': '1 / 3',
        '1/4': '1 / 4',
        '1/5': '1 / 5',
        '1/6': '1 / 6',
        '2/2': '2 / 2',
        '3/3': '3 / 3',
        '4/4': '4 / 4',
        '5/5': '5 / 5',
        '6/6': '6 / 6'
      },
      gridRow: {
        '1/1': '1 / 1',
        '1/2': '1 / 2',
        '1/3': '1 / 3',
        '1/4': '1 / 4',
        '1/5': '1 / 5',
        '1/6': '1 / 6',
        '2/2': '2 / 2',
        '3/3': '3 / 3',
        '4/4': '4 / 4',
        '5/5': '5 / 5',
        '6/6': '6 / 6'
      }
    }
  },
  plugins: [scrollbarPlugin]
};
