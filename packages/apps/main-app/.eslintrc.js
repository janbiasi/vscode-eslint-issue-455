const config = require('@configs/eslint/index');

module.exports = Object.assign(config, {
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
});
