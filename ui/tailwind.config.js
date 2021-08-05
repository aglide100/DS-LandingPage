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
      width: {
        117: "31.25rem",
        200: "56rem",
      },
      height: {
        "110vh": "110vh",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
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

      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'self': '0 30px 45px -12px rgba(0, 0, 0, 0.75)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'custom': '#212121',
       })
    },
  },
  variants: {
    extend: {
      maxWidth: ["active", "responsive", "hover", "focus", "group-hover"],
      width: ["active", "responsive", "hover", "focus", "group-hover"],
      textColor: ["active", "responsive", "hover", "focus", "group-hover"],
      boxShadow: ['active'],
    },
  },
  important: true,
  plugins: [],
};
