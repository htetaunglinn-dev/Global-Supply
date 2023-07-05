/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#068FFF',
        secondary: '#262927',
        light_red: '#F05454',
        milk: '#F5F5F5'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Agdasima: ['Agdasima', 'sans-seri']
      }
    }
  },
  plugins: []
}
