/* eslint-disable @typescript-eslint/no-var-requires */
const scrollbarPlugin = require('tailwind-scrollbar');

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
