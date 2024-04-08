/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
  "./src/componentes/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing:{
        '10-0-30': '10px 0 30px',
        '10-0':"10px 0",
        "20-0": "20px 0",
        "30-u":"30px auto",
        "40-0-10": "40px 0 10px"
      },
      fontFamily:{
        "Lato-serif" : "'Lato', sans-serif"
      },
      colors:{
        "gray-750": "#333"
      },backgroundColor:{
        "white-1" : " #f7f7f7",
        "purpure-w":"#9c88ff"
      },
      borderColor:{
        "solid-green": " #2ecc71",
        "solid-red": "#c0392b",
        "gray-0.1":"#bbb" 
      },boxShadow:{
        "shadow-1.0":"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
      }, width:{
        "400px":"400px"
      },translate:{
          "100-50": "translate(-100%, -50%)"
      },padding:{
        "2-5": "2px 5px"
      },borderWidth:{
        "1":"1px"
      },letterSpacing:{
        "1":"1px",
        "2":"2px",
      }
    },
  },
  plugins: [],
}

