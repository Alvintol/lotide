
const takeUntil = (array, callback) => {
  //  array.forEach(num => !callback(num) ? taken.push(num) : taken);
  let result = [];

  for (let num of array) {
    if (!callback(num)) {
      result.push(num);
    } else {
      return result;
    }
  }
};

//array
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


//callback
const results1 = takeUntil(data1, x => x < 0);
console.log('original test:', results1);



const negative = num => num < 0;
const five = numb => numb == 5;

console.log('test1:', takeUntil(data1, negative))
console.log('test2:', takeUntil(data1, five))



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

assertArraysEqual(takeUntil(data1, negative), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, five), [1, 2]);
