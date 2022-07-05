
/** @type {import('tailwindcss').Config } */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily:{
        'lato':['Lato']
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

module.exports = config;
