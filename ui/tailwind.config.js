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
      color: {
        ds_gray: {
          1: "#545454",
        },
      },
      gradientColorStops: {
        ds_gray: {
          1: "#545454",
        },
      },
      fontSize: {
        bg: "12vw",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  important: true,
  plugins: [],
};
