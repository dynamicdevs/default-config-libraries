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
    maxWidth: spacings,
    backgroundImage: (theme) => ({
      'roots-pattern': 'linear-gradient(112.78deg, #4F76FF 14.79%, #9D00E7 85.21%)'
    }),
    keyframes: {
      rotation: {
        '0%': {
          transform: 'rotate(0deg)'
        },
        '100%': {
          transform: 'rotate(360deg)'
        }
      }
    },
    animation: {
      'loader-rotation': 'rotation 1s linear infinite'
    }
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
