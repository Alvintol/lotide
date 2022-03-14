const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

assertArraysEqual(middle([10, 22, 3]), [22]);
assertArraysEqual(middle([13, 2, 30, 42, 5, 6]), [30, 42]);
assertArraysEqual(middle([11, 2]), []);
assertArraysEqual(middle([15]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);