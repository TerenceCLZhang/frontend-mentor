/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        grey: {
          700: "hsl(0, 0%, 20%)",
          800: "hsl(0, 0%, 12%)",
          900: "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        paragraph: "14px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
