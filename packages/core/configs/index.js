const languages = require('./languages');
const env = require('./env');

/**
 *
 * @type {{isServer: boolean, languages: {en: {code: string, hreflang: string, countryFlag: string, name: string, currency: string}, zh: {code: string, hreflang: string, countryFlag: string, name: string, currency: string, englishAbbreviation: string}}|{}, isLocalOrTesting: boolean, links: {referrerOk: string[]}, env: *|{}, isLocalEnv: boolean}}
 */
const configs = {
    languages,
    env,
    isLocalEnv: process.env.NODE_ENV === 'development',
    isLocalOrTesting: !(
        process.env.APP_ENV === 'prod' || process.env.APP_ENV === 'prod-cn'
    ),
    isServer: typeof window === 'undefined',
};

module.exports = configs;
