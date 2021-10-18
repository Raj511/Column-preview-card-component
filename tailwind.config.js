module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:{
          100: "hsl(31, 77%, 52%)",
          200: "hsl(184, 100%, 22%)",
          300: "hsl(179, 100%, 13%)"
        },
        neutral:{
          100: "hsla(0, 0%, 100%, 0.75)",
          200: "hsl(0, 0%, 95%)"
        }
      },
      fontFamily:{
        primary: ["Lexend Deca"],
        secondary: ['Big Shoulders Display']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
