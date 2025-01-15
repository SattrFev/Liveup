/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
 'node_modules/preline/dist/*.js',
 
  ],
  theme: {
    extend: {
      colors: {
        'ligth-primary': '#48CFCB',
        'dark-primary' : '#229799',
  
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'], // Josefin Sans
        anton: ['"Anton"', 'sans-serif'],         // Anton
      },
      backgroundPosition: {
        'center-top': 'center 50%', // Horizontal tengah, vertikal 30%
      },
      
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}

