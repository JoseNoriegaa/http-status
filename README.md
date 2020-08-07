# http-status
> This is just a simple library of utilities for HTTP status codes.

## Table of contents
- [Installation](#instalation)
- [Features](#features)
  - [HTTP status codes](#http-status-codes)
  - [Validators](#validators)
- [Tests](#tests)
- [License](#License)


## Installation
```bash
$ npm install --save @josenoriegaa/http-status
```

### Features

### HTTP status codes
#### Example
```js
const status = require('@josenoriegaa/http-status');

console.log(status.HTTP_204_NO_CONTENT); // output: 204
```
#### List of status codes
**Informational HTTP response status codes**
- HTTP_100_CONTINUE
- HTTP_101_SWITCHING_PROTOCOLS
- HTTP_102_PROCESSING
- HTTP_103_EARLY_HINTS

**Success HTTP response status codes**
- HTTP_200_OK
- HTTP_201_CREATED
- HTTP_202_ACCEPTED
- HTTP_203_NON_AUTHORITATIVE_INFORMATION
- HTTP_204_NO_CONTENT
- HTTP_205_RESET_CONTENT
- HTTP_206_PARTIAL_CONTENT
- HTTP_207_MULTI_STATUS
- HTTP_208_ALREADY_REPORTED
- HTTP_226_IM_USED

**Redirect HTTP response status codes**
- HTTP_300_MULTIPLE_CHOICES
- HTTP_301_MOVED_PERMANENTLY
- HTTP_302_FOUND
- HTTP_303_SEE_OTHER
- HTTP_304_NOT_MODIFIED
- HTTP_305_USE_PROXY
- HTTP_306_RESERVED
- HTTP_307_TEMPORARY_REDIRECT
- HTTP_308_PERMANENT_REDIRECT

**Client error HTTP response status codes**
- HTTP_400_BAD_REQUEST
- HTTP_401_UNAUTHORIZED
- HTTP_402_PAYMENT_REQUIRED
- HTTP_403_FORBIDDEN
- HTTP_404_NOT_FOUND
- HTTP_405_METHOD_NOT_ALLOWED
- HTTP_406_NOT_ACCEPTABLE
- HTTP_407_PROXY_AUTHENTICATION_REQUIRED
- HTTP_408_REQUEST_TIMEOUT
- HTTP_409_CONFLICT
- HTTP_410_GONE
- HTTP_411_LENGTH_REQUIRED
- HTTP_412_PRECONDITION_FAILED
- HTTP_413_PAYLOAD_TOO_LARGE
- HTTP_414_URI_TOO_LONG
- HTTP_415_UNSUPPORTED_MEDIA_TYPE
- HTTP_416_RANGE_NOT_SATISFIABLE
- HTTP_417_EXPECTATION_FAILED
- HTTP_418_IM_A_TEAPOT
- HTTP_421_MISDIRECTED_REQUEST
- HTTP_422_UNPROCESSABLE_ENTITY
- HTTP_423_LOCKED
- HTTP_424_FAILED_DEPENDENCY
- HTTP_425_TOO_EARLY
- HTTP_426_UPGRADE_REQUIRED
- HTTP_428_PRECONDITION_REQUIRED
- HTTP_429_TOO_MANY_REQUESTS
- HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE
- HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS

**Server error HTTP response status codes**
- HTTP_500_INTERNAL_SERVER_ERROR
- HTTP_501_NOT_IMPLEMENTED
- HTTP_502_BAD_GATEWAY
- HTTP_503_SERVICE_UNAVAILABLE
- HTTP_504_GATEWAY_TIMEOUT
- HTTP_505_HTTP_VERSION_NOT_SUPPORTED
- HTTP_506_VARIANT_ALSO_NEGOTIATES
- HTTP_507_INSUFFICIENT_STORAGE
- HTTP_508_LOOP_DETECTED
- HTTP_509_BANDWIDTH_LIMIT_EXCEEDED
- HTTP_510_NOT_EXTENDED
- HTTP_511_NETWORK_AUTHENTICATION_REQUIRED


#### Validators
```js
const {
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
} = require('@josenoriegaa/http-status');

isInformational(100); // true
isInformational(200); // false

isSuccess(200); // true
isSuccess(300); // false

isRedirect(300); // true
isRedirect(400); // false

isClientError(400); // true
isClientError(500); // false

isServerError(500); // true
isServerError(600); // false
```

## Tests
```bash
$ npm install
$ npm test
```

# License
[MIT](LICENSE)
