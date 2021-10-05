module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#2dccc1",
        secondary: "#7C69C3",
        'gray-c': "#CCCCCC"
      },
      height: {
        "72v": "72vh",
        "80v": "79vh",
      },
      spacing: {
        "4v": "4vh",
        "40v": "40vh",
      },
      fontFamily: {
        title: ['"Special"'],
        texto: ['"Montserrat"'],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      zIndex: {
        60: 60,
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
      animation: ["hover", "focus"],
      zIndex: ["hover"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
