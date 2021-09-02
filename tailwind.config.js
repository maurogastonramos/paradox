module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#2dccc1",
        secondary: "#7C69C3",
      },
      height: {
        "80v": "80vh",
      },
      spacing: {
        "4v": "4vh",
        "40v": "40vh",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      scale: ["group-hover"],
      border: ["last"],
      translate: ["group-hover"],
      filter: ["hover", "focus"],
    },
  },
  plugins: [],
};
