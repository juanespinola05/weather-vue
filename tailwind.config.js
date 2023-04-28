/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{vue,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#0B42AB',
        'weather-secondary': '#134CB5',
        'weather-terciary': '#08244F',
        'weather-quaternary': '#001026'
      }
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif']
    },
    container: {
      padding: '2em',
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: []
}
