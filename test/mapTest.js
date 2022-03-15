const map = require('../map');
const assert = require('chai').assert;

describe('map()', () => { 

  it("returns [ 'g', 'c', 't', 'm', 't' ] if word[0] is passed through map() as a callback", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word[0]);
    assert.deepEqual(results, ['g', 'c', 't', 'm', 't']);
  })  

  it("returns [ 'd', 'l', 'o', 'r', 'm' ] if word[word.length - 1] is passed through map() as a callback", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word[word.length - 1]);
    assert.deepEqual(results, [ 'd', 'l', 'o', 'r', 'm' ]);
  })  

  it("returns ['ground+ADDED', 'control+ADDED', 'to+ADDED', 'major+ADDED', 'tom+ADDED'] if word + '+ADDED' is passed through map() as a callback", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results = map(words, word => word + '+ADDED');
    const expected = ['ground+ADDED', 'control+ADDED', 'to+ADDED', 'major+ADDED', 'tom+ADDED'];
    assert.deepEqual(results, expected);
  })  

})