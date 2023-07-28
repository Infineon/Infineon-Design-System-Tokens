const { registerTransforms } = require('@tokens-studio/sd-transforms');
const StyleDictionary = require('style-dictionary');

registerTransforms(StyleDictionary, { excludeParentKeys: true });

const sd = StyleDictionary.extend({
  source: ['src/tokens/global.json'],
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      prefix: "ifx",
      buildPath: 'build/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();