const colors = require('./colors');
const fontFamily = require('./font-family');
const fontSize = require('./font-size');
const screens = require('../default/screens');
const spacings = require('../default/spacings');
const shadows = require('../default/shadows');

module.exports= {
  screens: screens,
  extend: {
    borderRadius: {
      '4xl': '2rem',
    },
    spacing: spacings,
    maxWidth: spacings
  },
  container: () => ({
    center: true,
  }),
  fontFamily: fontFamily,
  fontSize: fontSize,
  colors: colors,
  boxShadow: shadows,
  fill: (theme) => ({
    ...theme('colors'),
  }),
}
