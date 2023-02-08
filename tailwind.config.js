/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      mono: ["Space Mono"],
      sans: ["Work Sans"],
    },
    fontSize: {
      sm: "12px",
      base: "16px",
      lg: "22px",
      xl: "28px",
      "2xl": "38px",
      "3xl": "51px",
      "4xl": "67px",
    },
    backgroundColor: {
      primary: "#2B2B2B",
      secondary: "#3B3B3B",
      purple: "#A259FF",
    },

    fill: {
      purple: "#A259FF",
    },
    screens: {
      lg: "1280px",
      md: "835px",
    },
    borderRadius: {
      base: "20px",
    },
    lineHeight: {
      small: 1.1,
      large: 1.5,
      normal: 1.4,
    },
    borderColor: {
      purple: "#A259FF",
    },
    textColor: {
      primary: "#858584",
      white: "#ffff",
      purple: "#A259FF",
    },
    extend: {
      backgroundImage: {
        gradient_primary: "linear-gradient(to right bottom, #a259ff,#686cfa)",
        gradient_secondary: "linear-gradient(to right bottom, #a259ff,#ff6251)",
      },
    },
  },
  plugins: [],
};
