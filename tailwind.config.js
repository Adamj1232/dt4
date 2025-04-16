/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6fda66',
          dark: '#5bc552'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      },
      backdropBlur: {
        xs: '2px'
      },
      transitionDuration: {
        250: '250ms',
        300: '300ms'
      }
    }
  },
  plugins: []
}
