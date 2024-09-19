/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      borderRadius:{
        "23px":"23px",
        "20px":"20px",

      },
      fontSize:{
        "72px":"72px",
        "36px":"36px",
        "25px":"25px",
        "20px":"20px",
        "18px":"18px",
        "16px":"16px",
        "14px":"14px",
        "32px":"32px",
      },
      backgroundColor:{
        'search_bg':'#272f43',
        'footer-color': '#05091d',
        'block-color':'#040718',
      },
      width:{
        "268px":"268px",
        "240px":"240px",
        "220px":"220px",
        "600px":"600px",
        "1000px":"1000px",
        "350px":"350px",
      },
      height:{
        "30px":"30px",
        "1px":"1px",
        "400px":"400px",

      },
      borderColor:{
        "col-9E9C9C":"#9E9C9C",
      },
      fontFamily: {
        actor: ['actor', 'sans-serif'], // Добавьте ваш шрифт
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(267deg, #00F0FF 4.01%, #5200FF 57.55%, #FF2DF7 114.97%)',
      },
    },
  },
  plugins: [],
}