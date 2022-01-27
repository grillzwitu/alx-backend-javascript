const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('sum', function () {
    it('should be 2 + 4 = 6', function () {
      assert.equal(calculateNumber('SUM', 2, 4), 6);
    });
    it('should be -2 + -5 = -7', function () {
      assert.equal(calculateNumber('SUM', -2, -5), -7);
    });
    it('should be 1.3 + -5.7 = -5', function () {
      assert.equal(calculateNumber('SUM', 1.3, -5.7), -5);
    });
    it('should be -1 + 5 = 4', function () {
      assert.equal(calculateNumber('SUM', -1, 5), 4);
    });
  });
  describe('subtract', function () {
    it('should be 2 - 4 = -2', function () {
      assert.equal(calculateNumber('SUBTRACT', 2, 4), -2);
    });
    it('should be -2 - -5 = 3', function () {
      assert.equal(calculateNumber('SUBTRACT', -2, -5), 3);
    });
    it('should be 1.3 - -5.7 = 7', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.3, -5.7), 7);
    });
    it('should be -1 - 5 = -6', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, 5), -6);
    });
  });
  describe('divide', function () {
    it('should be 2 / 4 = 0.5', function () {
      assert.equal(calculateNumber('DIVIDE', 2, 4), 0.5);
    });
    it('should be 1.3 / -4.7 = -0.2', function () {
        assert.equal(calculateNumber('DIVIDE', 1.3, -4.7), -0.2);
      });
    it('should be -2 / -5 = 0.4', function () {
      assert.equal(calculateNumber('DIVIDE', -2, -5), 0.4);
    });
    it('should be -1.5 / 0 = Error', function () {
      assert.equal(calculateNumber('DIVIDE', -1.5, 0), 'Error');
    });
  });
});
