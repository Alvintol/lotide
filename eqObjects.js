const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}] 🛑`);
  }
};
const eqArrays = (first, second) => {
  let answer = true;
  for (let a = 0; a < first.length; a++) {
    if (first[a] !== second[a]) {
      answer = false;
    }
  } return answer;
};

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

const ab = { a: "2", b: "1" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false); // => false
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false) // => false
