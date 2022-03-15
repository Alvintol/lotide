const takeUntil = (array, callback) => {
  let result = [];

  for (let num of array) {
    if (!callback(num)) {
      result.push(num);
    } else {
      return result;
    }
  }
};
module.exports = takeUntil;
