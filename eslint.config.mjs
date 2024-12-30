import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import stylisticJSX from "@stylistic/eslint-plugin-jsx";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  { ignores: ["node_modules", "build"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylisticJSX.configs["all-flat"],
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@stylistic/jsx/jsx-indent": ["warn", 2],
      "@stylistic/jsx/jsx-indent-props": ["warn", 2],
      "@stylistic/jsx/jsx-one-expression-per-line": "off",
      "@stylistic/jsx/jsx-max-props-per-line": "warn",
      "@stylistic/jsx/jsx-newline": "off",
    },
  },
];
