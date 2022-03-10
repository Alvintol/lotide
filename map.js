const words = ["ground", "control", "to", "major", "tom"];

// const map = (array, callback) => {
//   let result = [];

//   for (let item of array) {
//     result.push(callback(item))
//   }
//   return result;
// };

// const map = (array, callback) => {
//   let result = [];

//   array.forEach(word => result.push(callback(word)));
//   return result;
// };

const map = (array, callback) => {
  let result = [];

  for (let a = 0; a < array.length; a++) {
    result.push(callback(array[a]));
  }
  return result;
};

const results1 = map(words, word => word[0]);
const result2 = word => word[word.length - 1];
const result3 = word => word + '+ADDED';
console.log('map test 1:', results1);
console.log('map test 2:', map(words, result2));
console.log('map test 3:', map(words, result3));




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

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

