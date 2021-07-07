module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "110vh": "110vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [],
};
