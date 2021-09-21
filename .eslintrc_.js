// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
    // "ecmaVersion": 2017,
    // "sourceType": "module"
  },
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "plugin:prettier/recommended", "prettier/vue", "eslint:recommended",],
  plugins: ["vue"],
  globals: {
    App: true,
    document: true,
    window: true,
    TweenMax: true,
    TweenLite: true,
    TimelineMax: true,
    Sine: true,
    Power0: true,
    Power1: true,
    Power2: true,
    Power3: true,
    Power4: true,
    Back: true,
    Elastic: true,
    Linear: true,
    grecaptcha: true
  },
  rules: {
    "comma-dangle": ["off"],
    "padded-blocks": 0,
    "no-unused-vars": ["warn", {"ignoreRestSiblings": true }],
    "no-undef": ["warn"],
    quotes: ["off"],
    "no-console": ["off"],
    "max-len": ["off"],
    semi: ["off", "always"],
    "space-before-blocks": ["off"],
    "space-before-function-paren": ["off"],
    camelcase: ["warn"],
    "comma-style": ["warn", "last"],
    "spaced-comment": ["off"],
    "no-debbuger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
