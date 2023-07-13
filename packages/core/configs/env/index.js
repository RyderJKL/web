const envConfigPaths = {
  local: require('./local'),
  beta: require('./beta'),
  production: require('./prod'),
};

const envConfig = envConfigPaths[process.env.NX_MOON_ENV || 'production'];

module.exports = envConfig;
