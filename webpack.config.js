var path = require('path');
var args = require('minimist')(process.argv.slice(2));

// List of allowed environments
var allowedEnvs = ['dev', 'dist', 'test'];

// Set the correct environment
var env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else if (process.env.ENV) {
  env = process.env.ENV;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;

// Get available configurations
const configs = {
  dev: require(path.join(__dirname, 'cfg/dev')),
  dist: require(path.join(__dirname, 'cfg/dist')),
  test: require(path.join(__dirname, 'cfg/test'))
};

/**
 * Get an allowed environment
 * @param  {String}  e
 * @return {String}
 */
function getValidEnv(e) {
  const isValid = e && e.length > 0 && allowedEnvs.indexOf(e) !== -1;
  return isValid ? e : 'dev';
}

/**
 * Build the webpack configuration
 * @param  {String} e Environment to use
 * @return {Object} Webpack config
 */
function buildConfig(e) {
  var usedEnv = getValidEnv(e);
  return configs[usedEnv];
}
module.exports = buildConfig(env);
