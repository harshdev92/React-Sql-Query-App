/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  media: false, 
  theme: {
    extend: {
      colors: {
        "primary-dark": "#004A7C",
        "secondary-dark": "#005691",
        "primary-light": "#E8F1F5",
        "secondary-light": "#FAFAFA",
      },
      gridTemplateColumns: {
        "layout-desktop": "18rem 1fr",
      },
      gridTemplateRows: {
        "layout-desktop": "4rem 300px 1fr 4rem",
      },
      screens: {
        xs: "424px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};