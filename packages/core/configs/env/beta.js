const env = {
  name: 'local',
  isLocal: true,
  hostname: '',
  internalDomains: {
    localhost: 1,
  },
  endpoints: {
    domain: 'http://localhost:3002',
    assets: '',
    baseAPI: '',
    websocket: '',
    imgUploadUrl: '',
    imgThumbnailUrl: '',
  },
  // GOOGLE_TAG_MANAGER_ID: 'GTM-W7JRSXH',
  fingerPointDeviceHost: 'https://api.commonservice.io',
  polaris: {
    host: 'https://www.devfdg.net',
    appId: '',
    saasId: '',
    token: '',
  },
  // Uncomment for use with `smartling-context-capture` package
  useSmartlingContextCapture: true,
};

module.exports = env;
