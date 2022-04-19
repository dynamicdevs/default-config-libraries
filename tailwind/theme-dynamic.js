const colors = require('./colors');
const fontFamily = require('./font-family');
const fontSize = require('./font-size');

module.exports= {
  screens: {
    md: '768px',
    lg: '1025px',
    xl: '1801px',
  },
  extend: {
    borderRadius: {
      '4xl': '2rem',
    },
    padding: {
      18: '4.5rem',
    },    
  },
  container: () => ({
    center: true,
  }),
  fontFamily: fontFamily,
  fontSize: fontSize,
  colors: colors,
  fill: (theme) => ({
    ...theme('colors'),
  }),
}