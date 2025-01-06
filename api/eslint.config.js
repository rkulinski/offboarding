/* eslint-disable */
const eslint = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const pluginJs = require("@eslint/js");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = tseslint.config(
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  eslint.configs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
);
/* eslint-enable */
