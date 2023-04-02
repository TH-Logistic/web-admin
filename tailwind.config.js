/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textColor: {
      "primary-color": "#00ADB5",
      "disabled": "#7B7C7D",
      "secondary-dark": "#333333",
      "secondary-light": "#666666",
      "on-primary": "#FFFFFF",
      "product-color": {
        "dangerous": "#DD4A48",
        "fragile": "#00B4D8",
        "machine": "#139487",
        "electronic": "#9F5980",
        "agricultural": "#ECB390",
        "food": "#EDCB3C",
        "cosmetic": "#91C483",
        "medicine": "#524A4E",
        "others": "#FF5C8D"
      },
      "truck-color": {
        "idle": "#32DC17",
        "delivery": "#EDCB3C"
      }
    },
    extend: {
      colors: {
        "primary-color": "#00ADB5",
        "secondary-color": "#0053B5",
        "disabled-color": "#A1D6D9",
        "border-color": "#B2B2B2",
        "button-color": "#75CCD0"
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
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
