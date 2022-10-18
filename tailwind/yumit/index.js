const colors = require("./colors");
const fontFamily = require("./font-family");
const fontSize = require("../horizon/font-size");
const screens = require("../default/screens");
const spacings = require("../default/spacings");
const shadows = require("../default/shadows");

module.exports = {
  screens: screens,
  extend: {
    borderRadius: {
      "4xl": "2rem",
    },
    spacing: spacings,
    maxWidth: spacings,
    backgroundImage: () => ({
      'timeline-pattern': 'linear-gradient(12.52deg, #FDD245 50%, #FE2260 90.92%)',
      'contact-pattern': 'linear-gradient(39.89deg, #FDD245 -1.57%, #FE2260 61.38%, rgba(6, 6, 30, 0) 100%)',
    }),
  },
  container: () => ({
    center: true,
  }),
  fontFamily: fontFamily,
  fontSize: fontSize,
  colors: colors,
  boxShadow: shadows,
  fill: (theme) => ({
    ...theme("colors"),
  }),
};
