const {
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
} = require('../../lib/utils');

describe('Function isInformational', () => {
  test('It should return true if the provided status code is in the range of 100 to 199', () => {
    for (let code = 100; code < 200; code++) {
      expect(isInformational(code)).toBe(true);
    }
  });
  test('It should return false if the provided status code is not in the range of 100 to 199', () => {
    for (let code = 200; code < 210; code++) {
      expect(isInformational(code)).toBe(false);
    }
  });
});

describe('Function isSuccess', () => {
  test('It should return true if the provided status code is in the range of 200 to 299', () => {
    for (let code = 200; code < 300; code++) {
      expect(isSuccess(code)).toBe(true);
    }
  });
  test('It should return false if the provided status code is not in the range of 200 to 299', () => {
    for (let code = 300; code < 310; code++) {
      expect(isSuccess(code)).toBe(false);
    }
  });
});

describe('Function isRedirect', () => {
  test('It should return true if the provided status code is in the range of 300 to 399', () => {
    for (let code = 300; code < 400; code++) {
      expect(isRedirect(code)).toBe(true);
    }
  });
  test('It should return false if the provided status code is not in the range of 300 to 399', () => {
    for (let code = 400; code < 410; code++) {
      expect(isRedirect(code)).toBe(false);
    }
  });
});

describe('Function isClientError', () => {
  test('It should return true if the provided status code is in the range of 400 to 499', () => {
    for (let code = 400; code < 500; code++) {
      expect(isClientError(code)).toBe(true);
    }
  });
  test('It should return false if the provided status code is not in the range of 400 to 499', () => {
    for (let code = 500; code < 510; code++) {
      expect(isClientError(code)).toBe(false);
    }
  });
});

describe('Function isServerError', () => {
  test('It should return true if the provided status code is in the range of 500 to 599', () => {
    for (let code = 500; code < 600; code++) {
      expect(isServerError(code)).toBe(true);
    }
  });
  test('It should return false if the provided status code is not in the range of 500 to 599', () => {
    for (let code = 600; code < 610; code++) {
      expect(isServerError(code)).toBe(false);
    }
  });
});
