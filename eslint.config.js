const js = require('@eslint/js');
const globals = require('globals');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig([
    { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
    { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
    { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
    eslintPluginPrettierRecommended,
]);
