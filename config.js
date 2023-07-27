const path = require("path");

module.exports = {
  source: ["src/tokens/global.json"],
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables"
        }
      ]
    }
  }
};
