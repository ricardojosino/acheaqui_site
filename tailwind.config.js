/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/*.{html,js}",
    "./src/index.html"
  ],

  theme: {

    container : {
      center : true
    },

    extend: {

      colors : {
        'color01' : '#EA5913',
        'color02' : '#383838',
        'color03' : '#EEEEEE',
        'color04' : '#FFFFFF',

      },



      fontFamily : {
        'bebas_new' : 'bebas_new',
        'catamaran' : 'catamaran',
      },

      screens : {
        'xl' : '1140px'
      },

    },
  },

  plugins: [],
}