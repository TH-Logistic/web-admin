/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      "primary-color": "#00ADB5",
    },
    extend: {
      colors: {
        "primary-color": "#00ADB5",
        "secondary-color": "#0053B5",
        "disabled-color": "#A1D6D9",
      },
      spacing: {
        "1/6": "16.66666%",
        "1/12": "8.33333%",
      },
    },
  },
  plugins: [],
};
