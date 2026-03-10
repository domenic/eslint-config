# Domenic's ESLint Config

This is my personal base ESLint config which matches the style I use on most projects. It's published to npm as `@domenic/eslint-config`.

## Usage

### Core rules

The main export configures ESLint's built-in rules (possible problems and suggestions, but not formatting):

```js
import domenicConfig from "@domenic/eslint-config";

export default [
  ...domenicConfig,
  // your overrides here
];
```

### Stylistic rules

An optional separate export configures formatting rules via [`@stylistic/eslint-plugin`](https://eslint.style/). To use it, install the plugin as well:

```bash
npm install --save-dev @stylistic/eslint-plugin
```

Then add the stylistic config:

```js
import domenicConfig from "@domenic/eslint-config";
import domenicStylisticConfig from "@domenic/eslint-config/stylistic";

export default [
  ...domenicConfig,
  ...domenicStylisticConfig,
  // your overrides here
];
```
