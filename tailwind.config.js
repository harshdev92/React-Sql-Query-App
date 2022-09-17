/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#383b40',
        'seconday-color': '#2a2e36',
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
  plugins: [],
}