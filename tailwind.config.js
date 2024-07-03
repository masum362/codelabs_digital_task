/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      themeColor:"#020043",
      normalText:"#343268",
      accent:"#FFC637"
    }
    },
  },
  plugins: [require('daisyui'),
  ],
}