// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    // ignore your build output
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    settings: {
      react: { version: "detect" },
    },

    // keep it simple: bring in ESLint's core recommended, then the exact rules we need
    rules: {
      ...js.configs.recommended.rules, // includes no-undef, etc.
      "react/jsx-no-undef": "error", // ⬅️ flags <OverviewPage />
      "react/react-in-jsx-scope": "off", // React 17+ new JSX transform
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
    },
  },
];

// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import { defineConfig, globalIgnores } from "eslint/config";

// export default defineConfig([
//   globalIgnores(["dist"]),
//   {
//     files: ["**/*.{js,jsx}"],
//     extends: [js.configs.recommended, reactHooks.configs["recommended-latest"], reactRefresh.configs.vite],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: "latest",
//         ecmaFeatures: { jsx: true },
//         sourceType: "module",
//       },
//     },
//     rules: {
//       "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
//     },
//   },
// ]);
