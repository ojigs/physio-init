/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a90e2",
        secondary: "#2c3e50",
        accent: {
          DEFAULT: "#ff7f50",
          hover: "#ff6347", // Slightly darker shade for hover state
        },
        light: "#f8f9fa",
        dark: "#1a2530",
      },
    },
  },
  plugins: [],
};
