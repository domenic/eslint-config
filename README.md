# Domenic's ESLint Config

This is my personal ESLint config. It's published to npm as `@domenic/eslint-config`.

It's designed for use for projects formatted with [oxfmt](https://oxc.rs/docs/guide/usage/formatter). Eventually it will probably become obsolete and replaced by an [oxlint](https://oxc.rs/docs/guide/usage/linter.html) configuration, but I'm taking this one step at a time.

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

An optional separate export contains a few stylistic lints that are not covered by oxfmt, via [`@stylistic/eslint-plugin`](https://eslint.style/). To use it, install the plugin as well:

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
