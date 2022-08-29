const plugin = require('tailwindcss/plugin');

const rotateY = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

const backface = plugin(({ addUtilities }) => {
  addUtilities({
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
  })
})

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['rubik'],
        'inter': ['inter'],
        'welcomeSummer': ['WelcomeSummer'],
      },
      spacing: {
        "full": "100%",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
        "min": "min-content",
        "1/7": "calc(100% / 7)",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
        "100v": "100vw",
        "min": "min-content",
        "1/7": "calc(100% / 7)",
      },
      colors: {
        "red-500": "#EF4444",
        "red-600": "#EF0000",
      }
    },
  },
  variants: {},
  plugins: [rotateY, backface],
}
