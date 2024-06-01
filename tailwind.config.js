/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          100: '#F5E8E3',
          200: '#FCEEE8',
        },
      },
    },
  },
  plugins: [],
}