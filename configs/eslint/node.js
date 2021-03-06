module.exports = {
    extends: [
        '@namics/eslint-config/configurations/es6-node.js',
        '@namics/eslint-config/configurations/es6-node-disable-styles.js',
    ].map(require.resolve),
    globals: {
        __dirname: true,
    },
};
