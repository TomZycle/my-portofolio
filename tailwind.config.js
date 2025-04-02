// tailwind.config.js
module.exports = {
  darkMode: "class", // enable dark mode with a class
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-dark-layer-1":
          "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(124, 0, 192) 60%, rgb(0, 7, 196) 80%)",
        "bg-dark-layer-2":
          "linear-gradient(90deg,black 40%, rgba(0, 0, 0, 0.567) 70%, transparent 100%)",
        "bg-light-layer-1":
          "linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(192, 150, 255) 60%, rgb(164, 209, 255) 80%)",
        "bg-light-layer-2":
          "linear-gradient(90deg, white 40%, rgba(255, 255, 255, 0.8) 70%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
