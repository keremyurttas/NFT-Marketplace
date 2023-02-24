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

    screens: {
      lg: "1280px",
      md: "835px",
    },
    borderRadius: {
      base: "20px",
    },
    lineHeight: {
      xsmall: 1.1,
      small: 1.2,
      large: 1.5,
      normal: 1.4,
      xlarge: 1.6,
    },
    borderColor: {
      primary: "#2B2B2B",
      secondary: "#3B3B3B",
      tertiary: "#A259FF",
    },

    extend: {
      backgroundImage: {
        gradient_primary: "linear-gradient(to right bottom, #a259ff,#686cfa)",
        gradient_secondary: "linear-gradient(to right bottom, #a259ff,#ff6251)",
        gradient_mushroom:
          "linear-gradient(180deg, rgba(162.00005114078522, 89.00000989437103, 255, 0) 0%, rgb(162.00000554323196, 89.00000229477882, 255) 100%)",
      },
      textColor: {
        primary: "#858584",
        secondary: "#2B2B2B",
        footer: "#CCCCCC",
        divider: "#3B3B3B",
      },
      backgroundColor: {
        primary: "#2B2B2B",
        secondary: "#3B3B3B",
        tertiary: "#A259FF",
        inactive: "#858584",
      },
    },
  },
  plugins: [],
};
