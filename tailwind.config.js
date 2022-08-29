/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        additional: "#212121",
      },
    },
  },
  plugins: [],
};
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
