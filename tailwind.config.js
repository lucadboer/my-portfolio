/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        ubuntu: 'Ubuntu, sans-serif',
      },

      backgroundImage: {
        home: "url('/bg-home.gif')",
      },
      boxShadow: {
        home: 'inset 0px -30px 30px #121214;',
        button: '0px 0px 6px',
      },
    },
  },
  plugins: [],
}
