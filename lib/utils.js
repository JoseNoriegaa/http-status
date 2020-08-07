const validationFactory = (code, rangeStart, rangeEnd) => code >= rangeStart && code < rangeEnd;

// Public utils

/**
 * It checks if the provided status code is in the range of the
 * 1xx HTTP status codes.
 * @param {Number} code http status code
 * @returns {Boolean} result
 */
const isInformational = code => validationFactory(code, 100, 200);

/**
 * It checks if the provided status code is in the range of the
 * 2xx HTTP status codes.
 * @param {Number} code http status code
 * @returns {Boolean} result
 */
const isSuccess = code => validationFactory(code, 200, 300);

/**
 * It checks if the provided status code is in the range of the
 * 3xx HTTP status codes.
 * @param {Number} code http status code
 * @returns {Boolean} result
 */
const isRedirect = code => validationFactory(code, 300, 400);

/**
 * It checks if the provided status code is in the range of the
 * 4xx HTTP status codes.
 * @param {Number} code http status code
 * @returns {Boolean} result
 */
const isClientError = code => validationFactory(code, 400, 500);

/**
 * It checks if the provided status code is in the range of the
 * 5xx HTTP status codes.
 * @param {Number} code http status code
 * @returns {Boolean} result
 */
const isServerError = code => validationFactory(code, 500, 600);

module.exports = {
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
};
