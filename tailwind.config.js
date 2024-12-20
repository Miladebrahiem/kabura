/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#80232A',
          light: '#9C2B33',
          dark: '#661C22',
        },
        secondary: '#222F52',
        tertiary: '#3499A3',
        quaternary: '#94731A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};