/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("tailwind-heropatterns")({
      // as per tailwind docs you can pass variants
      variants: [],

      // the list of patterns you want to generate a class for
      // the names must be in kebab-case
      // an empty array will generate all 87 patterns
      patterns: ["four-point-stars"],

      // The foreground colors of the pattern
      colors: {
        default: "#2bb97f",
      },

      // The foreground opacity
      opacity: {
        default: "0.4",
      }
    }),
  ],
}
