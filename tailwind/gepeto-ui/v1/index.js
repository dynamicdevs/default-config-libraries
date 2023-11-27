const screens = require('../screens');
const fontSize = require('./font-size');
const fontFamily = require('../font-family');
const spacings = require('../spacings');

module.exports = {
  screens: screens,
  spacing: spacings,
  borderRadius: {
    'none': '0px',
    'sm': '2px',
    'md': '6px',
    'lg': '8px',
    'xl': '12px',
    '2xl': '16px',
    '3xl': '24px',
    'full': '9999px',
  },
  extend: {
    minWidth: spacings,
    maxWidth: spacings,
    minHeight: spacings,
    maxHeight: spacings,
  },
  container: () => ({
    center: true,
  }),
  fontFamily: fontFamily,
  fontSize: fontSize,
  fill: theme => ({
    ...theme('colors'),
  }),
};
