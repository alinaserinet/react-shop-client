module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    fontFamily: {
      'sans': ['"Open Sans"'],
    },
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FB2E86',
        },
        blue: {
          DEFAULT: '#2F1AC4',
          dark: '#3F509E',
          darkest: '#151875',
          lightest: '#F3F9FF',
        },
        purple: {
          DEFAULT: '#7E33E0',
          light: '#9F63B5',
          lightest: '#E0D3F5'
        },
        red: {
          DEFAULT: '#FB2448',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
