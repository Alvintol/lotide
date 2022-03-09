const letterPositions = (sentence) => {
  const result = {};
  let splitStr = sentence.split('');

  for (const letterIndex in splitStr) {
    let letter = splitStr[letterIndex];
    if (letter === ' ') {
    } else if (result[letter]) {
      result[letter].push(letterIndex);
    } else {
      result[letter] = [letterIndex];
    }
  }
  return result;
};

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

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions('hello'));

assertArraysEqual(letterPositions('hello'), { h: [ '0' ], e: [ '1' ], l: [ '2', '3' ], o: [ '4' ] })