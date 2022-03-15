const without = require('../without');
const assert = require('chai').assert;

describe('without()', () => {

  it('returns [2, 3] if [1] is passed through without()', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  })

  it('returns ["1", "2"] if [1, 2, "3"] is passed through without()', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  })

  it('returns ["hello", "world"] if ["lighthouse"] is passed through without()', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  })

})