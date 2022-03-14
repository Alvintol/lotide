const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail()", () => {

  it('should return [2, 3, 4] for [1, 2, 3, 4] if passed through tail()', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  })

  it('should return ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"] if passed through tail()', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

})