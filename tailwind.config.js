/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}

/*
Theme configuration 
This is the theme section in my tailwind.config.js file
Where you define your projects color palette, type scale, fonts, breakpoints,
border radius values & more.

If you want to include all of the default colors in Tailwind, 
you have to include the new colors in an "extends" bracket so it won't overwrite everything else.
*/

