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

const without = (source, remove) => {
  let copy = [...source];

  copy.forEach(item => {
    remove.forEach(target => {
      if (item === target) {
        copy.splice(copy.indexOf(item), 1);
      }
    });
  });
  console.log(copy);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["hello", "world", "lighthouse"], ["lighthouse"]);

const test = [1, 2, 3];
without([1, 2, 3], [1]);

assertArraysEqual(test, [1, 2, 3]);