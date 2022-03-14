const chai = require('chai');
const eqObjects = require('../eqObjects');
const assert = chai.assert;

describe('eqObjects()', () => {

  it('should return false if objectA length is not equal to obejctB', () => {
    const objectA = {a: 1, b: 2};
    const objectB = {a: 1, b: 2, c: 3};
    const eqObjects = eqObjects(objectA, objectB);
    assert.isFalse(eqObjects);
  });
  
});