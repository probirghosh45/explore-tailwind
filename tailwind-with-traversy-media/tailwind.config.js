/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      // Overriding the defaults breakpoints

      xs: { min: "475px", max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": { min: "1536px" },

      // xs: { min: "475px", max: "639px" },
      // // => @media (min-width: 640px and max-width: 767px) { ... },
      // sm: { min: "640px", max: "767px" },
      // md: { min: "768px", max: "1023px" },
      // lg: { min: "1024px", max: "1179px" },
      // xl: { min: "1280px", max: "1535px" },
      // "2xl": { min: "1536px" },

      // 'sm': '576px',
      // // => @media (min-width: 576px) { ... }

      // 'md': '960px',
      // // => @media (min-width: 960px) { ... }

      // 'lg': '1440px',
      // // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
