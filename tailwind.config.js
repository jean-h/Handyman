module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#C00000',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}