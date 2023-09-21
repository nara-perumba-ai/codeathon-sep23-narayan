const assert = require('assert');
const { validate } = require('./program-3');

describe('validate', function() {
  it('should return true for a valid IP address', function() {
    const ipAddress = '192.168.0.1';
    const expected = true;

    const result = validate(ipAddress);

    assert.strictEqual(result, expected);
  });

  it('should return false for an IP address with too many octets', function() {
    const ipAddress = '192.168.0.1.1';
    const expected = false;

    const result = validate(ipAddress);

    assert.strictEqual(result, expected);
  });

  it('should return false for an IP address with too few octets', function() {
    const ipAddress = '192.168.0';
    const expected = false;

    const result = validate(ipAddress);

    assert.strictEqual(result, expected);
  });

  it('should return false for an IP address with an octet greater than 255', function() {
    const ipAddress = '192.168.0.256';
    const expected = false;

    const result = validate(ipAddress);

    assert.strictEqual(result, expected);
  });

  it('should return false for an IP address with an octet less than 0', function() {
    const ipAddress = '192.168.-1.1';
    const expected = false;

    const result = validate(ipAddress);

    assert.strictEqual(result, expected);
  });
});