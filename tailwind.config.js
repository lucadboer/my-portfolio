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
      backgroundColor: {
        bgNavbarMobile: 'rgba(0, 0, 0, 0.95)',
      },
      boxShadow: {
        home: 'inset 0px -30px 30px #121214',
        button: '0px 0px 6px',
        projects: 'inset 0px -25px 30px #000',
        hoverProjects: '0px 0px 8px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
