const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      keyframes: {
        shake: {
          "10%": {
            transform: "rotate(15deg)",
          },
          "20%": {
            transform: "rotate(-15deg)",
          },
          "30%": {
            transform: "rotate(15deg)",
          },
          "40%": {
            transform: "rotate(-15deg)",
          },
        },
        spin: {
          0: {
            transform: "rotate(0deg)",
          },
          100: {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        shake: "shake 0.25s",
        spin: "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
