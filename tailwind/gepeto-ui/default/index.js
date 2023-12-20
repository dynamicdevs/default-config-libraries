const backgroundImage = require('./background-image');
const colors = require('./colors.json');
const fontSize = require('./font-size');
const fontFamily = require('../font-family');
const screens = require('../screens');
const spacings = require('../spacings');

module.exports = {
  screens,
  spacing: spacings,
  extend: {
    minWidth: spacings,
    maxWidth: spacings,
    minHeight: spacings,
    maxHeight: spacings,
    backgroundImage,
  },
  container: () => ({
    center: true,
  }),
  fontFamily,
  fontSize,
  colors,
  fill: (theme) => ({
    ...theme('colors'),
  }),
};
