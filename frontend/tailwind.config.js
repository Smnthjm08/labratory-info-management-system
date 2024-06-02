/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
