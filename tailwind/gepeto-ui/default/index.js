const backgroundImage = require('./background-image');
const colors = require('./colors');
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
  fontFamily,
  fontSize,
  colors,
};
