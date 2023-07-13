/**
 * Local environment configuration
 * @type {{internalDomains: {localhost: number}, useSmartlingContextCapture: boolean, hostname: string, endpoints: {assets: string, baseAPI: string, websocket: string, domain: string, imgThumbnailUrl: string, imgUploadUrl: string}, name: string, fingerPointDeviceHost: string, polaris: {appId: string, host: string, saasId: string, token: string}, isLocal: boolean}}
 */
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
    websocket: '',
    moonCrashWebsocket: 'ws://localhost:12000',
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
