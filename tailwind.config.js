/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      center:true,
    },
    extend: {
      colors:{
        'bluemode': {
          '50': '#f2f7fd',
          '100': '#e5edf9',
          '200': '#c5d9f2',
          '300': '#92b9e7',
          '400': '#5895d8',
          '500': '#3277c5',
          '600': '#225da7',
          '700': '#205295',
          '800': '#1c4170',
          '900': '#1c385e',
          '950': '#13243e',
      },
    },
    fontFamily:{
      "Vazir":"Vazir",
      "VazirMedium":"VazirMedium",
      "VazirLight":"VazirLight",
      "VazirBold":"VazirBold"
    },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

