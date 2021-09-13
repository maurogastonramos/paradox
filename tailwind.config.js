module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#2dccc1",
        secondary: "#7C69C3",
      },
      height: {
        "72v": "72vh",
      },
      spacing: {
        "4v": "4vh",
        "40v": "40vh",
      },
      fontFamily: {
        title: ['"Orbitron"'],
        texto: ['"Montserrat"'],
        Anurati: ["Anurati"],
        Blanka: ["Blanka"],
        Dual: ["Dual"],
        Emyrl: ["Emyrl"],
        Josefin: ["Josefin"],
        Riviera: ["Riviera"],
        Robota: ["Robota"],
        Sen: ["Sen"],
        Special: ["Special"],
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
    },
  },
  plugins: [],
};
