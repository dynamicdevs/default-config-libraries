const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      md: '768px', // { min: 768, max: 1023 }
      lg: '1025px', // { min: 1024, max: 1799 }
      xl: '1801px', // { min: 1800 } 
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
    fontFamily: {
      lato: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      inconsolata: ['Inconsolata', 'monospace', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'display-01': [
        '7rem',
        {
          lineHeight: '9.5rem',
          letterSpacing: '3px',
        },
      ],
      'display-02': [
        '6rem',
        {
          lineHeight: '8rem',
          letterSpacing: '3px',
        },
      ],
      'display-03': [
        '5rem',
        {
          lineHeight: '6.5rem',
          letterSpacing: '2px',
        },
      ],
      'heading-01': [
        '4.5rem',
        {
          lineHeight: '6rem',
          letterSpacing: '-1.5px',
        },
      ],
      'heading-02': [
        '4rem',
        {
          lineHeight: '5.5rem',
          letterSpacing: '0px',
        },
      ],
      'heading-03': [
        '3.5rem',
        {
          lineHeight: '5rem',
          letterSpacing: '0px',
        },
      ],
      'heading-04': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
          letterSpacing: '0px',
        },
      ],
      'heading-05': [
        '2rem',
        {
          lineHeight: '3rem',
          letterSpacing: '0px',
        },
      ],
      'heading-06': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0px',
        },
      ],
      'heading-07': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
        },
      ],
      'heading-08': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0px',
        },
      ],
      'heading-01-case': [
        '4.5rem',
        {
          lineHeight: '6rem',
          letterSpacing: '8px',
        },
      ],
      'heading-02-case': [
        '4rem',
        {
          lineHeight: '5.5rem',
          letterSpacing: '8px',
        },
      ],
      'heading-03-case': [
        '3.5rem',
        {
          lineHeight: '5rem',
          letterSpacing: '6px',
        },
      ],
      'heading-04-case': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
          letterSpacing: '5px',
        },
      ],
      'heading-05-case': [
        '2rem',
        {
          lineHeight: '3rem',
          letterSpacing: '5px',
        },
      ],
      'heading-06-case': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '4px',
        },
      ],
      'heading-07-case': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '4px',
        },
      ],
      'heading-08-case': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '3px',
        },
      ],
      'subheading-01': [
        '3rem',
        {
          lineHeight: '4.5rem',
          letterSpacing: '0.5px',
        },
      ],
      'subheading-02': [
        '2rem',
        {
          lineHeight: '3.5rem',
          letterSpacing: '0.5px',
        },
      ],
      'subheading-03': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.5px',
        },
      ],
      'paragraph-01': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0px',
        },
      ],
      'paragraph-02': [
        '1.25rem',
        {
          lineHeight: '2rem',
          letterSpacing: '0px',
        },
      ],
      'paragraph-03': [
        '1rem',
        {
          lineHeight: '2rem',
          letterSpacing: '0px',
        },
      ],
      'paragraph-04': [
        '0.75rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0px',
        },
      ],
      'button-01': [
        '2rem',
        {
          lineHeight: '2rem',
          letterSpacing: '0.5px',
        },
      ],
      'button-02': [
        '1.5rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.5px',
        },
      ],
      'button-03': [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.5px',
        },
      ],
      'button-04': [
        '1rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.3px',
        },
      ],
      'button-05': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.2px',
        },
      ],
      'caption-01': [
        '0.5rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0px',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      primary: {
        dynamic: {
          900: '#001B1E',
          800: '#013F44',
          700: '#006A73',
          600: '#0098A5',
          500: '#00D9EB',
          400: '#56EEFB',
          300: '#8CF6FF',
          200: '#B3F5FB',
          100: '#DDFCFF',
        },
        neutral: {
          500: '#1C2528',
          400: '#30444A',
          300: '#72858B',
          200: '#ADC4CB',
          100: '#E4ECEE',
        },
        grey: {
          600: '#FFFFFF',
          500: '#E8E8E8',
          400: '#BCBCBC',
          300: '#707070',
          200: '#2C2C2C',
          100: '#000000',
        },
      },
      secondary: {
        emerald: {
          500: '#00552C',
          400: '#0FAF63',
          300: '#00FB82',
          200: '#74FFBC',
          100: '#B6FFDC',
        },
        aqua: {
          500: '#005248',
          400: '#00A38F',
          300: '#05D7BE',
          200: '#57FFD7',
          100: '#B8FFF6',
        },
        blue: {
          500: '#00304A',
          400: '#0069A5',
          300: '#00A3FF',
          200: '#00A3FF',
          100: '#B6E5FF',
        },
        purple: {
          500: '#35266D',
          400: '#8061FF',
          300: '#AA95FF',
          200: '#D2C7FF',
          100: '#F1EEFF',
        },
      },
      feedback: {
        warning: {
          300: '#FF4329',
          200: '#FF8473',
          100: '#FFC2BA',
        },
        attention: {
          300: '#FFBD3E',
          200: '#FFDA93',
          100: '#FFE8BB',
        },
        success: {
          300: '#9AFE6B',
          200: '#C2FF9D',
          100: '#E8FFC3',
        },
      },
      others: {
        transparency: {
          900: 'rgba(10, 26, 38, 0.9)',
          800: 'rgba(10, 26, 38, 0.8)',
          700: 'rgba(10, 26, 38, 0.7)',
          600: 'rgba(10, 26, 38, 0.6)',
          500: 'rgba(10, 26, 38, 0.5)',
          400: 'rgba(10, 26, 38, 0.4)',
          300: 'rgba(10, 26, 38, 0.3)',
          200: 'rgba(10, 26, 38, 0.2)',
          100: 'rgba(10, 26, 38, 0.1)',
        },
      },
    },
    fill: (theme) => ({
      ...theme('colors'),
    }),
  },
  plugins: [],
}
