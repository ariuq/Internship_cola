/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '12%': '12%',
        '10%' : '10%'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        comfortaa: ['Comfortaa', 'cursive'],
      },
      boxShadow: {
        'm' : '0px 0px 8px 0px rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'primary-orange': '#FF5722',
        'teal': '#00A3A3',
        'teal-dark': '#00818A',
        'white':'#ffffff',
        'indigo': '#1e647d',
        'bg-teal': '#A7F1EA',
        'coral' : '#FF5D52',
        'light-indigo' : '#5C5C5C',
        'lightgrey' : '#f0f2f2',
        'strong-red' : '#d7391d'
        
      }
    },
  },
  plugins: [],
}