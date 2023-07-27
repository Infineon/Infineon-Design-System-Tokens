const path = require("path");

module.exports = {
  source: ["src/tokens/global.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      files: [
        {
          destination: "src/tokens/_tokens.scss",
          format: "scss/variables-with-docblock",
        },
      ],
    },
  },
};
