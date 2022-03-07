const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}] ✅`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}] 🛑`);
  }
};

const head = (a) => a[0];

console.log(head([]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");