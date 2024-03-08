module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-mobile-forever": {
      appSelector: "#app",
      viewportWidth: 375,
      maxDisplayWidth: 430,
      appContainingBlock: "auto",
      necessarySelectorWhenAuto: ".app-wrapper"
    }
  }
};
