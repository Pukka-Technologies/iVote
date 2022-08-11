/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-img": "url('../public/assets/header-bg.jpg')",
        "events-header-img": "url('../public/assets/events1.jpg')",
      },
      fontFamily: {
        text: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
};
