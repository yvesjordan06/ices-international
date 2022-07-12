/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        text2: "#696969",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["corporate"],
  },
};
