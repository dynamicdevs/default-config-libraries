const colors = require('./colors');
const fontFamily = require('./font-family');
const fontSize = require('./font-size');
const screens = require('../default/screens');

module.exports= {
  screens: screens,
  extend: {
    borderRadius: {
      '4xl': '2rem',
    },
    padding: {
      18: '4.5rem',
    },
    spacing: {
      18: '4.5rem',
    },
    height: {
      30: '7.5rem',
    },
  },
  container: () => ({
    center: true,
  }),
  fontFamily: fontFamily,
  fontSize: fontSize,
  colors: colors,
  boxShadow: {
    sm: '0 1px 1px rgba(40, 47, 82, 0.15)',
    md: '0 2px 4px rgba(40, 47, 82, 0.15)',
    lg: '0 2px 8px rgba(40, 47, 82, 0.15)',
  },
  fill: (theme) => ({
    ...theme('colors'),
  }),
}
