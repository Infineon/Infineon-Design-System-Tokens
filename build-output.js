const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

registerTransforms(StyleDictionary);

StyleDictionary.registerTransforms({
  excludeParentKeys: true,
})

const sd = StyleDictionary.extend({
  source: ['src/tokens/global.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: "ifx",
      buildPath: 'build/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();