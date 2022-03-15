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

module.exports = countOnly;