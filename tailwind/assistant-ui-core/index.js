const colors = require('./colors');
const fontFamily = require('./font-family');
const fontSize = require('./font-size');
const screens = require('./screens');
const spacings = require('../default/spacings');

module.exports= {
  screens: screens,
  extend: {
    spacing: spacings,
    maxWidth: spacings,
    maxHeight: spacings,
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
