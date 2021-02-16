# Domenic's ESLint Config

This is my personal base ESLint config which matches the style I use on most projects. It's published to npm as `@domenic/eslint-config`.

## Usage

After installing, use `extends: "@domenic"` in the top level of the ESLint config object, e.g.

```js
module.exports = {
  extends: "@domenic",
  rules: {
    // per-project rules here
  }
};
```
