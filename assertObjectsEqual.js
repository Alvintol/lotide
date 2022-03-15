const eqObjects = require('./eqObjects')

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ? console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}] ✅`) : console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}] 🛑`);
};

module.exports = assertObjectsEqual;