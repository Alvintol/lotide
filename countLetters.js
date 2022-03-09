const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}] 🛑`);
  }
};

const countLetters = (sentence) => {
  //return a count of each letter in the sentence
  let splitStr = sentence.split(' ').join('').split('');
  let count = {};

  splitStr.forEach(letter => {
    if (count[`${letter}`]) {
      count[`${letter}`]++;
    } else {
      count[`${letter}`] = 1;
    }
  });
  return count;
};

const actualCheck = countLetters("lighthouse in the house");
const expectedCheck = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };

assertEqual(actualCheck, expectedCheck);