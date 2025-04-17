/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f7f8",
          100: "#ccefef",
          200: "#99dfdf",
          300: "#66cfcf",
          400: "#33bfbf",
          500: "#37B6BD",
          600: "#2c9299",
          700: "#216d73",
          800: "#16494c",
          900: "#0b2426",
        },
        secondary: "#2c3e50",
        accent: {
          DEFAULT: "#37B6BD",
          hover: "#2c9299",
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
          "linear-gradient(rgba(26, 37, 48, 0.3), rgba(26, 37, 48, 0.8)), url('/assets/images/physio-bg-black.webp')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
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
