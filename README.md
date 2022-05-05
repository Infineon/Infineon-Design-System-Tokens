# Infineon Design System Tokens

## Requirements

- [Node](https://nodejs.org/en/) >= v14 – if you have [nvm](https://github.com/creationix/nvm#node-version-manager---) installed, you can just run `nvm use` to select the right node version.
- [Yarn](https://classic.yarnpkg.com/en/) >= `1.22.10` or [npm](https://www.npmjs.com/) >= `6.14.13`

## Usage

Add this repository to your dependencies in `package.json`:
```bash
npm install --save @infineon/design-system-tokens
```

```bash
yarn add @infineon/design-system-tokens
```

<mark>Warning: while not published on npm, yet, use `ssh://git@github.com:Infineon/IFX-Design-System-Tokens.git` instead of `@infineon/design-system-tokens`. You need access to that repository, though!</mark>

Now you can import the assets you need to consume. This currently includes:
```bash
.
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

2 directories, 8 files
```

Include / import `fonts.css` to get the correct font definitions. You'll additionally have to copy the fonts assets (`fonts/`) themselves to your publicly available root folder (often times it's called `static/` or `public/`).

An import could, depending on your local setup, for example look like this:

```css
@import "@infineon/design-system-tokens/dist/fonts.css";
```

To use the current Design Tokens in SASS import them in your project (in your entry point for SASS, commonly something like `src/index.scss`):

```css
@import "@infineon/design-system-tokens/dist/fonts.css";
```

## Development

### Installation

This project itself is developed with `yarn`.  
Install all needed dependencies with:

```bash
yarn install
```

### Start Storybook

Start Storybook in local dev mode, including file watchers to hot-reload on code change:

```bash
yarn start
```

### Build Storybook

Build the static Storybook, ready to be hosted / deployed.  
Result gets added in `storybook-static/`:

```bash
yarn build-storybook
```

### Bundle

Generate a bundle that can be published on `npm`, adds result in `dist/` folder: 

```bash
yarn bundle
```

<mark>Warning: while not published on npm, yet, the `dist/` folder is removed from the `.gitignore` to make testing the npm integration through Github-URLs work. Those files would otherwise be excluded from being committed. This needs to be removed when publishing is established.</mark>
