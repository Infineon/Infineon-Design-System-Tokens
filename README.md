# Infineon Design System Tokens
<!-- ABOUT THE PROJECT -->
## About The Project

As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints. 

This repository contains our design Tokens - so called Atoms.

These tokens are transformed into scss and are available at NPM @infineon/design-system-tokens

## Requirements

- [Node](https://nodejs.org/en/) >= v14 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.
- [Yarn](https://classic.yarnpkg.com/en/) >= `1.22.10` or [npm](https://www.npmjs.com/) >= `6.14.13`

## Usage

Add this repository to your dependencies in `package.json`, in your terminal:
```bash
npm install --save @infineon/design-system-tokens
```

```bash
yarn add @infineon/design-system-tokens
```

Now you can import the assets you need to consume. This currently includes:
```bash
├── fonts
│   └── source-sans-pro-v18-latin
│       ├── source-sans-pro-v18-latin-600.woff
│       ├── source-sans-pro-v18-latin-600.woff2
│       ├── source-sans-pro-v18-latin-700.woff
│       ├── source-sans-pro-v18-latin-700.woff2
│       ├── source-sans-pro-v18-latin-regular.woff
│       └── source-sans-pro-v18-latin-regular.woff2
├── fonts.css
└── _tokens.scss
```

Include / import `fonts.css` to get the correct font definitions. You'll additionally have to copy the fonts assets (`fonts/`) themselves to your publicly available root folder (often times it's called `static/` or `public/`).

An import could, depending on your local setup, for example look like this:

*CSS*:
```css
@import "./node_modules/@infineon/design-system-tokens/dist/fonts.css";
```

To use the current Design Tokens in SASS import them in your project (in your entry point for SASS, commonly something like `src/index.scss`):

*SCSS*:
```scss
@import "./node_modules/@infineon/design-system-tokens/dist/tokens";
```

## Local Development

### Installation

This project itself is developed with `yarn`.  
Install all needed dependencies with:

```bash
yarn install
```

### Bundle

Generate a bundle that can be published on `npm`, adds result in `dist/` folder: 

```bash
yarn bundle
```
