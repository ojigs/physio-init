/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e3f6fb",
          100: "#c2eaf6",
          200: "#91daee",
          300: "#5fc9e6",
          400: "#2eb8de",
          500: "#0886af",
          600: "#066d8d",
          700: "#05546a",
          800: "#033a48",
          900: "#012126",
        },
        secondary: "#025774",
        accent: {
          DEFAULT: "#0886af",
          hover: "#066d8d",
        },
        light: "#f8f9fa",
        dark: "#1a2530",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(26, 37, 48, 0.45), rgba(26, 37, 48, 0.9)), url('/assets/images/physio-bg-blue.webp')",
        "cta-pattern":
          "linear-gradient(rgba(26, 37, 48, 0.5), rgba(26, 37, 48, 0.95)), url('/assets/images/physio-bg-black.webp')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-slower": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
