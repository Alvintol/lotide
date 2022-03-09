const eqObjects = (object1, object2) => {
  let result = false;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let keyA in object1) {
      for (let keyB in object2) {
        if (object1[keyA] === object2[keyB]) {
          result = true;
        }
      }
    }
  }
  return result;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ? console.log(`✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}] ✅`) : console.log(`🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}] 🛑`);
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });

