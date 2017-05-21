/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store-production.js');
} else {
  module.exports = require('./store-development.js');
}
