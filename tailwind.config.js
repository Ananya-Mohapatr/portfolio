/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const MyClass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    }
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'hsla(0, 39%, 67%, .233)', // Define your custom HSLA color
      },
      backgroundImage:{
        'contactImg':"url('/src/assets/1530x900-horizontal-2021-04-30T110441.108.jpg.webp')"
      }
    },
  },
  plugins: [MyClass],
}

