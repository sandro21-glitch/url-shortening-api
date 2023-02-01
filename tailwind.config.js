/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Cyan': 'hsl(180, 66%, 49%)',
        'DarkViolet': 'hsl(257, 27%, 26%)',
        'redCl': 'hsl(0, 87%, 67%)',
        'GrayCl': 'hsl(0, 0%, 75%)',
        'GrayishViolet': 'hsl(257, 7%, 63%)',
        'VeryDarkBlue': 'hsl(255, 11%, 22%)',
        'VeryDarkViolet': 'hsl(260, 8%, 14%)',
        'grayBg': 'rgb(239, 240, 245)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}



