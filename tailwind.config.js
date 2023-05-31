/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors : {
         eswasthyaprim:"#71b5f5",
         'eswasthya-blue': '#42ADF0',
      },
      backgroundImage : {
             'Nav-image' : "url(/src/assets/Twitter.svg)"
      },
      fontFamily : {
        cera : ["cera","sans-serif"],
        ceraBold : ["cera-bold","sans-serif"]
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
