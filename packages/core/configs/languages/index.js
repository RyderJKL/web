const languages = {
    en: {
        code: 'en',
        name: 'English',
        countryFlag: 'US',
        currency: 'usd',
        hreflang: 'en',
    },
    // Any locales with dashes should come before their counterparts.
    // i18next does a prefix match iterating through the languages array, so if `zh` came first in this list,
    // then it would incorrectly match with `zh-tw`.
    // 'zh-tw': {
    //     code: 'zh-tw',
    //     name: '繁體中文',
    //     countryFlag: 'ZH-TW',
    //     currency: 'twd',
    //     englishAbbreviation: 'Traditional Chinese',
    //     hreflang: 'zh-tw',
    // },
    zh: {
        code: 'zh',
        name: '简体中文',
        countryFlag: 'ZH',
        currency: 'cny',
        englishAbbreviation: 'Simplified Chinese',
        hreflang: 'zh',
    },
};

module.exports = languages;
