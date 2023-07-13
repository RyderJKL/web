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
    baseAPI: 'http://3.98.149.24:8081',
    moonCrashWebsocket: 'ws://15.156.104.203:12000',
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
