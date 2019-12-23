module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    "plugin:cypress/recommended",
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    test: true,
    expect: true
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", ".*.ts", ".*.tsx"],
      excludedFiles: "**/*.test.tsx",
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb",
        "airbnb/hooks",
        "plugin:import/typescript",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "prettier/react"
      ],
      rules: {
        curly: ["error", "all"],
        "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
        "spaced-comment": ["error", "always", { markers: ["/"] }]
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "cypress/**/*.{js,jsx,ts,tsx}",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/*.spec.{js,jsx,ts,tsx}"
        ]
      }
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 1
  }
};
