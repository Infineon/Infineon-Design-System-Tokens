import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary, { excludeParentKeys: true, platform: 'css' });

const sd = new StyleDictionary({
  source: ['src/tokens/global.json'],
  preprocessors: ['tokens-studio'],
  log: {
    verbosity: 'verbose',
  },
  platforms: {
    scss: {
      transformGroup: 'tokens-studio',
      prefix: 'ifx',
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

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
