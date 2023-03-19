/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      "primary-color": "#00ADB5",
      "disabled": "#7B7C7D",
      "secondary-dark": "#333333",
      "secondary-light": "#666666"
    },
    extend: {
      colors: {
        "primary-color": "#00ADB5",
        "secondary-color": "#0053B5",
        "disabled-color": "#A1D6D9",
      },
      fontWeight: {
        medium: 800
      },
      spacing: {
        "1/6": "16.66666%",
        "1/12": "8.33333%",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
};