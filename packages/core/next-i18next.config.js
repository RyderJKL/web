const configs = require('./configs');
const locales = Object.keys(configs.languages);
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const getLocalePath = () => {
  if (isProd) {
    return path.resolve('./public/locales');
  }

  if (isDev) {
    return configs.isServer
      ? require('path').resolve('./packages/core/public/locales')
      : '/locales';
  }

  return path.resolve('./public/locales');
};

module.exports = {
  // debug: isDev,
  i18n: {
    localeDetection: false,
    defaultLocale: 'en',
    locales,
  },
  defaultNS: 'common',
  lowerCaseLng: true,
  localePath: getLocalePath(),
  nsSeparator: '::',
  keySeparator: '::',
  reloadOnPrerender: true,
  // Do not load a fallbakick.  We'll just use the key as the fallback.
  fallbackLng: false,
  // Empty strings should be invalid, so we can fallback to the message key
  returnEmptyString: false,
};
