/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customStone: {
          100: "hsl(30, 54%, 90%)",
          150: "hsl(30, 18%, 87%)",
          600: "hsl(30, 10%, 34%)",
          900: "hsl(24, 5%, 18%)",
        },
        customBrown: {
          800: "hsl(14, 45%, 36%)",
        },
        customRose: {
          50: "hsl(330, 100%, 98%)",
          800: "hsl(332, 51%, 32%)",
        },
      },
      fontSize: {
        paragraph: "16px",
      },
      fontFamily: {
        serif: ["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
