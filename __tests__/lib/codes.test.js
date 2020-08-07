const {
  informational,
  success,
  redirect,
  clientError,
  serverError,
} = require('../../lib/codes');

describe('Informational Response HTTP status codes', () => {
  test('It should return true if the status codes are in the range of 100 to 103', () => {
    const values = Object.values(informational);
    for (let i = 0; i < values.length; i++) {
      const status = values[i];
      expect(status >= 100 && status <= 103).toBe(true);
    }
  });
});

describe('Success response HTTP status codes', () => {
  test('It should return true if the status codes are in the range of 200 to 208 including 226', () => {
    const values = Object.values(success);
    for (let i = 0; i < values.length; i++) {
      const status = values[i];
      expect((status >= 200 && status <= 208) || status === 226).toBe(true);
    }
  });
});

describe('Redirect response HTTP status codes', () => {
  test('It should return true if the status codes are in the range of 300 to 308', () => {
    const values = Object.values(redirect);
    for (let i = 0; i < values.length; i++) {
      const status = values[i];
      expect(status >= 300 && status <= 308).toBe(true);
    }
  });
});

describe('Client error response HTTP status codes', () => {
  test('It should return true if the status codes are in the range of 400 to 418, and 421 to 426 including 428, 429, 431 and 451.', () => {
    const values = Object.values(clientError);
    for (let i = 0; i < values.length; i++) {
      const status = values[i];
      expect((status >= 400 && status <= 451) || (status >= 421 && status <= 426) || [
        428,
        429,
        431,
        452,
      ].includes(status)).toBe(true);
    }
  });
});

describe('Server error response HTTP status codes', () => {
  test('It should return true if the status codes are in the range of 500 to 511', () => {
    const values = Object.values(serverError);
    for (let i = 0; i < values.length; i++) {
      const status = values[i];
      expect(status >= 500 && status <= 511).toBe(true);
    }
  });
});
