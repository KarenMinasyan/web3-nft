/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {max: '1280px'},
      'xl': {max: '1024px'},
      'lg': {max: '960px'},
      'md': {max: '768px'},
      'sm': {max: '640px'},
      'xs': {max: '320px'},
    },
    extend: {
      colors: {
        primary: {
          50: '#F2F5FC',
          100: '#E2E8F7',
          200: '#CBD6F2',
          300: '#A8BCE8',
          400: '#7E9ADC',
          500: '#5F7AD2',
          600: '#4A5EC4',
          700: '#414EB4',
          800: '#3A4293',
          900: '#333A75',
        },
        secondary: {
          50: '#FCFDFD',
          100: '#F7FAFB',
          200: '#EEF3F5',
          300: '#DBDEE5',
          400: '#C4C8CF',
          500: '#A5ADB9',
          600: '#7E8A9C',
          700: '#637282',
          800: '#3C4249',
          900: '#212225',
        },
        yellowLight: '#FFF8EB',
        red: {
          50: '#FFF5F2',
          600: '#B01E20',
        },
      },
    },
  },
  plugins: [],
}
