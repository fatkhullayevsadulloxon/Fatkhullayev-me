/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins']
      },
      colors:{
        green: '#0fd647',
        dark: '#080a15',
        secondary: '#ffffff0f', 
        'white-100': '#f6f7f9',
        'white-200': '#676a7d'
      },
      lineHeight:{
        136: '136%'
      },
    },
  },
  plugins: [],
}

