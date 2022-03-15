const findKey = require('../findKey');
const assert = require('chai').assert;

describe('findKey()', () => {
  it('returns "noma" if "x => x.stars === 2" is passed through fineKey()', () => {
    const names = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }
    assert.equal(findKey(names, x => x.stars === 2), 'noma');
  })
});
