import { nextui } from "@nextui-org/react";
import tailwindscroll from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    darkMode: 'class',
    extend: {
      screens: {
        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }

          'md': '850px',
          // => @media (min-width: 850px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }

          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },

      },
      backgroundImage: {
        'ia-background': "url('/src/assets/images/backgrounds/gradient-.avif')"
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        green: {
          50: '#E8FAF0',
          100: '#D1F4E0',
          200: '#A2E9C1',
          300: '#74DFA2',
          400: '#45D483'
        },
        primary: {
          '50': '#ebf4ff',
          '100': '#dbeaff',
          '200': '#bed7ff',
          '300': '#97bbff',
          '400': '#6e93ff',
          '500': '#4c6cff',
          '600': '#243aff',
          '700': '#202fe2',
          '800': '#1d2cb6',
          '900': '#202d8f',
          '950': '#131953',
          DEFAULT: '#4c6cff'
        },
        danger: {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fba6a6',
          '400': '#f77272',
          '500': '#ec3232',
          '600': '#db2727',
          '700': '#b81d1d',
          '800': '#981c1c',
          '900': '#7e1e1e',
          '950': '#450a0a',
          "DEFAULT": '#ec3232'
        }

      },
      fontFamily: {
        main: ['Josefin Sans', 'sans-serif'],
        roleway: ['Raleway', 'sans-serif'],
        Arimo: ['Arimo', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],


      },
    },
  },
  darkMode: "media",
  plugins: [nextui(), tailwindscroll]
}