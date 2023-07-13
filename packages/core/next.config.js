const {withNx} = require('@nrwl/next/plugins/with-nx');
process.env.I18NEXT_DEFAULT_CONFIG_PATH = `${__dirname}/next-i18next.config.js`;
// const { nextI18NextRewrites } = require('next-i18next/rewrites');
const {i18n} = require('./next-i18next.config');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = withNx({
    i18n,
    nx: {
        svgr: false,
    },
    experimental: {
        largePageDataBytes: 1000 * 1000,
    },
    useFileSystemPublicRoutes: true,
    reactStrictMode: true,
});

module.exports = nextConfig;
