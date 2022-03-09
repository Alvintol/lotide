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

const flatten = (target) => {
  let copy = [];

  target.forEach(item => {
    Array.isArray(item) ? item.forEach(nested => {copy.push(nested)}) : copy.push(item);
  });
  console.log(copy);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
