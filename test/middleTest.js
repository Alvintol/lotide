const { assert } = require('chai');
const middle = require('../middle')

describe('middle()', () => {

  it('returns [22] if [10, 22, 3] is passed trough middle()', () => {
    assert.deepEqual(middle([10, 22, 3]), [22]);
  })
  
  it('returns [] if [15] is passed trough middle()', () => {
    assert.deepEqual(middle([15]), []);
  })

  it('returns [] if [11, 2] is passed trough middle()', () => {
    assert.deepEqual(middle([11, 2]), []);
  })

  it('returns [30, 42] if [13, 2, 30, 42, 5, 6] is passed trough middle()', () => {
    assert.deepEqual(middle([13, 2, 30, 42, 5, 6]), [30, 42]);
  })

})