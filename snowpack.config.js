// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
    mount: {
        public: '/',
        src: '/dist',
        node_modules: '/web_modules',
    },
    plugins: [
        '@prefresh/snowpack',
        [
            '@snowpack/plugin-babel',
            {
                input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'], // (optional) specify files for Babel to transform
                transformOptions: {},
            },
        ],
    ],
    devOptions: {
        secure: true,
        port: 3000,
    },
    alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
    },
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
}
