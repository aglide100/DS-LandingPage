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
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      textColor: {
        ds_gray: {
          1: "#545454",
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      gradientColorStops: {
        ds_gray: {
          1: "#545454",
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      fontSize: {
        bg: "12vw",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active", "responsive", "hover", "focus", "group-hover"],
    },
  },
  important: true,
  plugins: [],
};
