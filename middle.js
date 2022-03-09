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

const middle = (target) => {
  const length = target.length;
  let targetMiddle = [];
  if (length <= 2) {
    return targetMiddle;
  } else if (length % 2 === 0) {
    targetMiddle.push(target[(target[length - 1] / 2) - 1], target[target[length - 1] / 2]);
  } else {
    targetMiddle.push(target[(Math.floor(target[length - 1] / 2))]);
  }
  return targetMiddle;
};


const check = middle([10, 22, 3]); // 22
assertArraysEqual(check, [22]);
const check1 = middle([13, 2, 30, 42, 5, 6]); // 30, 42
assertArraysEqual(check1, [30, 42]);
const check2 = middle([11, 2]); // []
assertArraysEqual(check2, []);
const check3 = middle([15]); // []
assertArraysEqual(check3, []);
const check4 = middle([1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(check4, [2, 3]);
const check5 = middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
assertArraysEqual(check5, [3, 4]);