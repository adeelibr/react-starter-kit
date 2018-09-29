/* eslint-disable global-require */

// Use DefinePlugin (Webpack) or loose-envify (Browserify)
// together with Uglify to strip the dev branch in prod build.
const env = process.env.NODE_ENV;
if (env === 'production' || env === 'demo' || env === 'stag') {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}
