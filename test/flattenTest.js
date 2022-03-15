const flatten = require('../flatten');
const assert = require('chai').assert;
describe('flatten()', () => {

  it('returns [1, 2, 3, 4, 5, 6] if [1, 2, [3, 4], 5, [6]] is passed through flatten()', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [ 1, 2, 3, 4, 5, 6 ]);
  })

})
