const assertEqual = require('./assertEqual');

const countOnly = (allItems, itemsToCount) => {
  let report = {};
  allItems.forEach(name => {
    for (const count in itemsToCount) {
      if (name === count && itemsToCount[count]) {
        if (report[`${name}`]) {
          report[`${name}`]++;
        } else {
          report[`${name}`] = 1;
        }
      }
    }
  }); return report;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);