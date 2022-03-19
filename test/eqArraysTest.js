const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe('eqArrays()', () => {
  
  it('returns true if ([9, 2, 3], [9, 2, 3]) is passed through eqArrays', () => {
    assert.isTrue(eqArrays([9, 2, 3], [9, 2, 3]), true);
  });
  
  it('returns false if ([1, 2, 3], [3, 2, 1]) is passed through eqArrays', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  
  it('returns true if (["1", "8", "3"], ["1", "8", "3"]) is passed through eqArrays', () => {
    assert.isTrue(eqArrays(["1", "8", "3"], ["1", "8", "3"]), true);
  });
  
  it('returns false if (["1", "2", "3"], ["1", "2", 3]) is passed through eqArrays', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  
  it('returns true if ([[2, 7], [4]], [[2, 7], [4]]) is passed through eqArrays', () => {
    assert.isTrue(eqArrays([[2, [7]], [4]], [[2, [7]], [4]]), true);
  });
  
  it('returns false if ([[2, 3], [4]], [[2, 3], [4, 5]]) is passed through eqArrays', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  
  it('returns false if ([[6, 3], [4]], [[6, 3], 4]) is passed through eqArrays', () => {
    assert.isFalse(eqArrays([[6, 3], [4]], [[6, 3], 4]), false);
  });

})