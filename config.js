const path = require("path");
const glob = require("glob");

const componentTokenFiles = glob.sync("src/*/*-tokens.json");

module.exports = {
  source: ["src/tokens/*.json", "src/*/*-tokens.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      files: [
        {
          destination: "src/tokens/_tokens.scss",
          format: "scss/variables-with-docblock",
        },
        ...componentTokenFiles.map((filePath) => {
          const dirname = path.dirname(filePath);
          const basename = path.basename(filePath, ".json");
          return {
            destination: `${path.join(dirname, "_" + basename)}.scss`,
            format: "scss/variables-with-docblock",
            filter: {
              attributes: {
                category: basename.replace("-tokens", ""),
              },
            },
          };
        }),
      ],
    },
  },
};
