module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: [
    "jsx-a11y",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    semi: 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "prettier/prettier": [
      "error", {
        singleQuote: true,
        semi: true
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off"
  },
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.test.js",
      ],
      env: {
        jest: true
      }
    }
  ]
};
