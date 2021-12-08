import { createElement, useEffect } from 'react';
import { run as runHolder } from "holderjs/holder";
import "../src/index.scss";

const PreviewImageDecorator = (Story) => {
  useEffect(runHolder)
  return createElement(Story)
};

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
};

export const decorators = [
  PreviewImageDecorator,
];
