const middle = (target) => {
  const length = target.length;
  let targetMiddle = [];
  if (length <= 2) {
    return targetMiddle;
  } else if (length % 2 === 0) {
    targetMiddle.push(target[(target[length - 1] / 2) - 1], target[target[length - 1] / 2]);
  } else {
    targetMiddle.push(target[(Math.floor(target[length - 1] / 2))]);
  }
  return targetMiddle;
};

module.exports = middle;