const findKeyByValue = (object, value) => {
  for (const genre in object) {
    if (object[genre] === value) {
      return genre;
    }
  }
};
module.exports = findKeyByValue;