const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}] 🛑`);
  }
};

const findKeyByValue = (object, value) => {
  for (const genre in object) {
    if (object[genre] === value) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That \'70s Show"), undefined);