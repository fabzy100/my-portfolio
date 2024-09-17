/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{,ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        
        kaushan: ["Kaushan Script"],
       }
    },

    colors: {
      green: {
      
        DEFAULT: '#00f260',
      }
    }
  },
  plugins: [],
}

