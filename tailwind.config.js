/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        ubuntu:'Ubuntu, sans-serif',
      },
      
      backgroundImage: {
        home: "url('/bg-home.gif')",
      }
    },
  },
  plugins: [],
}