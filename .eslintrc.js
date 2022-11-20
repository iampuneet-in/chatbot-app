module.exports = {
    plugins: ['security', 'promise'],
    extends: [
        'airbnb-base',
        'plugin:security/recommended',
        'plugin:node/recommended',
        'plugin:prettier/recommended',
        'plugin:promise/recommended'
    ],
    env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'node/exports-style': ['error', 'module.exports'],
        'node/prefer-global/url': ['error', 'always'],
        'node/no-missing-require': 'error',
      }
}