/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
      },
      colors: {
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
        lightPurple: "#AD28EB",
      },
      backgroundImage: {
        mobile: "url('./images/background-pattern-mobile.svg')",
        desktop: "url('./images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
