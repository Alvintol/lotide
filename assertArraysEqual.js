const eqArrays = (first, second) => {
  let answer = true;
  for (let a = 0; a < first.length; a++) {
    if (first[a] !== second[a]) {
      answer = false;
    }
  } return answer;
};

const assertArraysEqual = (first, second) => {
  eqArrays(first, second) ? console.log(`✅ Assertion Passed: [${first}] === [${second}] ✅`) : console.log(`🛑 Assertion Failed: [${first}] !== [${second}] 🛑`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false