const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('findKeyByvalue()', () => {

  it('returns "drama" if "The Wire" is passed through findKeyByValue()', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it('returns undefined if "That \'70s Show" is passed through findKeyByValue()', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That \'70s Show"), undefined);
  });

});