/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#4B34A2',
        secondary: '#EDD83D',
        greenC: '#6AB547',
        blue: '#A5C4BD',
      },
    },
  },
  plugins: [],
}
