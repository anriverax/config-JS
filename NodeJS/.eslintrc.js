const base = require('./eslint-config/base.eslint');

const config = base();

config.parser = '@babel/eslint-parser';
config.parserOptions = {
  ...config.parserOptions,
  allowImportExportEverywhere: false,
  babelOptions: {
    configFile: './babel.config.json'
  }
};
config.plugins = [...config.plugins, '@babel'];
config.rules = {
  ...config.rules,
  'no-unused-private-class-members': 'error',
  '@babel/new-cap': [
    'error',
    {
      newIsCap: true
    }
  ],
  '@babel/no-invalid-this': 'error',
  '@babel/semi': ['error', 'always'],
  'lines-between-class-members': ['error', 'always']
};

module.exports = config;
