/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      colors : {
         eswasthyaprim:"#71b5f5"
      },
      backgroundImage : {
             'Nav-image' : "url(/files/Twitter.svg)"
      },
      fontFamily : {
        cera : ["cera","sans-serif"],
        ceraBold : ["cera-bold","sans-serif"]
      }
    },
  },
};
