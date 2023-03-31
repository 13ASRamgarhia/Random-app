/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',  
        'laptop': '1024px',
        'desktop': '1920px',
      },
      fontFamily: {
        BLKCHCRY: ["BLKCHCRY"],
        Montserrat: ["Montserrat"],
        Tahoma: ["Tahoma"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        cardLightBG: "rgba(255, 250, 255, 1)",
        headingColor: "#151531",
        subHeadingColor: "rgba(21, 21, 49, 0.8)",
      },
      gridTemplateColumns : {
        autofit: "repeat(auto-fit, minmax(270px, 1fr));"
      }
    },
  },
  plugins: [require("daisyui")],
}