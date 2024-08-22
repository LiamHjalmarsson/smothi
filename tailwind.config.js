/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_100: "#ea8f87",
        primary_200: "#e47c74",
        primary_300: "#de6861",
        primary_400: "#d7524e",
        primary_500: "#CF3A3A",
        primary_600: "#b43131",
        primary_700: "#992828",
        primary_800: "#7f2020",
        primary_900: "#671818",

        secondary_100: "#5ad4d4",
        secondary_200: "#72d9d9",
        secondary_300: "#87dedd",
        secondary_400: "#9ae3e2",
        secondary_500: "#3acfcf",
        secondary_600: "#31b4b4",
        secondary_700: "#289999",
        secondary_800: "#207f7f",
        secondary_900: "#186767",

        black: "#263238",
        dark_gray: "#4D4D4D",
        gray: "#717171",
        light_gray: "#89939E",
        gray_blue: "#ABBED1",
        silver: "#F5F7FA",
        white: "#F1F1F1",
      },
      boxShadow: {
        'middle': "0px 0px 50px 25px",
        'sm_middle': "0px 0px 6px 2px",
        'lg': "0 10px 15px -3px ",
        'xl': "0 20px 25px -5px",
        '2xl': "0 25px 50px -12px",
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(12deg, rgba(255, 37, 37, 1) 0%, rgba(233, 87, 87, 1) 50%, rgba(153, 22, 22, 1) 100%)",
      }
    },
  },
  plugins: [],
}