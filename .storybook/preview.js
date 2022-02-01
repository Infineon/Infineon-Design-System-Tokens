import { createElement, useEffect } from "react";
import { run as runHolder } from "holderjs/holder";
import "./index.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCoffee, faCheck, faGlobe, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faXing, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(
  faStar,
  faCoffee,
  faCheck,
  faGlobe,
  faMapMarkerAlt,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faXing,
  faYoutube,
)

const PreviewImageDecorator = (Story) => {
  useEffect(runHolder);
  return createElement(Story);
};

const tokenContext = require.context(
  "!!raw-loader!../src/tokens",
  true,
  /.\.(css|less|scss|svg)$/
);
const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename, content: tokenContext(filename).default }));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
    },
  },
  designToken: {
    files: tokenFiles,
  },
};

export const decorators = [PreviewImageDecorator];
