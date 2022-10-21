/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "#FC4747",
        DarkBlue: "#10141E",
        GreyishBlue: "#5A698F",
        SemiDarkBlue: "#161D2F",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
