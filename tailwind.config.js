/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '900px'
      },
      textColor: {
        "primary-color": "#00ADB5",
        "primary-table-color": "#75CCD0",
        "hint": "#B2B2B2",
        "disabled": "#7B7C7D",
        "secondary-dark": "#333333",
        "secondary-light": "#666666",
        "on-primary": "#FFFFFF",
        "on-secondary": "#000000",
        "caption": "#72777A",
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
        },
        "user-status": {
          'new': '#105CCD',
          'active': '#056803',
          'suspended': '#BA8500',
          'resigned': '#6100C7',
          'deleted': '#2F2F2F'
        },
        "provider-type": {
          "1": "#EDCB3C",
          "2": "#139487",
          "3": "#ECB390"
        }
      },
      colors: {
        "primary-color": "#00ADB5",
        "secondary-color": "#0053B5",
        "disabled-color": "#A1D6D9",
        "error-color": "#F33030",
        "border-color": "#B2B2B2",
        "button-color": "#75CCD0",
        "button-color-secondary": "#B2B2B3",
        "input-border": "#E3E5E5",
        "user-status": {
          'new': '#C6DCF0',
          'active': '#C7F0C6',
          'suspended': '#F0E4C6',
          'resigned': '#DEC9F4',
          'deleted': '#AAAAAA'
        }
      },
      fontWeight: {
        medium: 800,
      },
      spacing: {
        "1/6": "16.66666%",
        "1/12": "8.33333%",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    // fontWeight: {
    //   normal: 500,
    //   semibold: 600,
    //   bold: 800,
    // }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
