const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('countOnly()', () => {

  it('returns { Fang: 2, Jason: 1 } if { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false } is passed through countOnly', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith",
      "Jason", "Salima", "Fang", "Joe"];
    const countOnlyy = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    assert.deepEqual(countOnlyy, { Fang: 2, Jason: 1 });
  })

  it('returns undefined if { "Karima": true} is passed through countOnly', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith",
      "Jason", "Salima", "Fang", "Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    assert.deepEqual(result["Karima"], undefined);
  })

  it('returns undefined if { "Karima": true} is passed through countOnly', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith",
      "Jason", "Salima", "Fang", "Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    assert.deepEqual(result["Fang"], 2);
  })

  it('returns undefined if { "Karima": true} is passed through countOnly', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith",
      "Jason", "Salima", "Fang", "Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    assert.deepEqual(result["Agouhanna"], undefined);
  })

})