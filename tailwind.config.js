/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pilat: "pilat-extended, ui-serif",
      },
      colors: {
        background: "#212832",
        primary: "#455A64",
        secondary: "#FED36A",
        box: "rgba(255, 255, 255, 0.5)",
        card: "rgba(60, 90, 100, 1)",
      },
    },
  },
  plugins: [],
};
