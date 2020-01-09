module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': 0,
    'object-curly-spacing': 0,
    'indent': 0,
    'quotes': 0,
    'no-console': 0,
    'eol-last': 0,
    'vue/html-self-closing': 0,
    'no-trailing-spaces': 0

  }
}
