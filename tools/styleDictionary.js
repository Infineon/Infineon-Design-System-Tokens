const config = require("../config.js");
const StyleDictionary = require("style-dictionary");
const { fileHeader, createPropertyFormatter, sortByReference } =
  StyleDictionary.formatHelpers;

StyleDictionary.extend(config)
  .registerFormat({
    name: "scss/variables-with-docblock",
    formatter({ dictionary, options = {outputReferences: true}, file }) {
      const { outputReferences, themeable = false } = options;

      // https://github.com/amzn/style-dictionary/blob/main/lib/common/formatHelpers/formattedVariables.js#L42
      let { allTokens } = dictionary;
      const lineSeparator = "\n";

      // Some languages are imperative, meaning a variable has to be defined
      // before it is used. If `outputReferences` is true, check if the token
      // has a reference, and if it does send it to the end of the array.
      // We also need to account for nested references, a -> b -> c. They
      // need to be defined in reverse order: c, b, a so that the reference always
      // comes after the definition
      if (outputReferences) {
        // note: using the spread operator here so we get a new array rather than
        // mutating the original
        allTokens = [...allTokens].sort(sortByReference(dictionary));
      }

      // Check if 'baseTypo' exists in the dictionary
      if (allTokens.allProperties && allTokens.allProperties.some(prop => prop.name === 'baseTypo')) {
        console.log('baseTypo exists in the dictionary');
      } else {
        console.log('baseTypo does not exist in the dictionary');
      }
      const defaultScssFormater = createPropertyFormatter({
        outputReferences,
        dictionary,
        format: "sass",
        formatting: {},
        themeable,
      });

      return (
        fileHeader({ file, commentStyle: "short" }) +
        allTokens
          .map((prop) => {
            const { docblock } = prop;
            const doc = [];
            if (docblock?.length) {
              doc.push(
                "",
                "/**",
                ...docblock.map((line) => " * " + line),
                " */",
                ""
              );
            }
            return doc.join(lineSeparator) + defaultScssFormater(prop);
          })
          .filter(Boolean)
          .join(lineSeparator)
      );
    },
  })
  .buildAllPlatforms();
