const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('should be 2 + 4 = 6', function () {
    assert.equal(calculateNumber(2, 4), 6);
  });
  it('should be -2 + -5 = -7', function () {
    assert.equal(calculateNumber(-2, -5), -7);
  });
  it('should be 1.3 + -5.7 = -5', function () {
    assert.equal(calculateNumber(1.3, -5.7), -5);
  });
  it('should be -1 + 5 = 4', function () {
    assert.equal(calculateNumber(-1, 5), 4);
  });
});
