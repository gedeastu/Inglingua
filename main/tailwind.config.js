/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'PlanetComic' : ['Planet Comic','sans-serif'],
      'Daysans' : ['DAYSANS','sans-serif'],
      'TGL' : ['TGL12096.01','sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}