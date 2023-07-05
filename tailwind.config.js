/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#121212',
        'secondary':'#30475E',
        'light_red':'#F05454',
        'milk':'#F5F5F5'
      }
    },
  },
  plugins: [],
}