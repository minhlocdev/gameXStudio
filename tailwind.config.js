/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCB11",
        secondary: "#FFFA85",
        mute: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
