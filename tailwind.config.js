/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*/{html,js}"],
  theme: {
    extend: {},
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
