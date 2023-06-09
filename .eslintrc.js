/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
};
