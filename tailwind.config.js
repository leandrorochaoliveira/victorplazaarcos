/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary:'#4a2411',
      primaryLight: '#794d37',
      primaryDark: '#280000',
      secondary: '#a38b7f',
      secondaryLight: '#d5bbae',
      secondaryDark: '#745e53',
      primaryText: '#ffffff',
      secondaryText: '#000000',
    },
    fontFamily: {
      'sans': [ 'Roboto Condensed', 'sans-serif'],
      'serif': ['Roboto Slab', 'serif'],
    }
  },
  plugins: [],
}
