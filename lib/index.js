const statusCodes = require('./codes');
const utils = require('./utils');

exports.STATUS_INFORMATIONAL = statusCodes.informational;
exports.STATUS_SUCCESS = statusCodes.success;
exports.STATUS_REDIRECT = statusCodes.redirect;
exports.STATUS_CLIENT_ERROR = statusCodes.clientError;
exports.STATUS_SERVER_ERROR = statusCodes.serverError;
exports.utils = utils;

module.exports = {
  ...statusCodes.informational,
  ...statusCodes.success,
  ...statusCodes.redirect,
  ...statusCodes.clientError,
  ...statusCodes.serverError,
  ...utils,
};
