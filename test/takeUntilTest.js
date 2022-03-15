const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe('takeUntil(0', () => {

  it('returns [1, 2, 5, 7, 2], if "x => x < 0" is passed through takeUntil()', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data, x => x < 0);
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(results, expected);
  })

  it('returns [1, 2], if "num => num === 5" is passed through takeUntil()', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = takeUntil(data, num => num === 5);
    const expected = [1, 2];
    assert.deepEqual(results, expected);
  })

})