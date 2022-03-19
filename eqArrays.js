const eqArrays = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (!Array.isArray(first[i]) && !Array.isArray(second[i])) {
      if (first[i] !== second[i]){
        return false;
      }
    } else if (Array.isArray(first) && !Array.isArray(second)||
    !Array.isArray(first) && Array.isArray(second)) {
      return false;
    } else {
      if (!eqArrays(first[i], second[i])){
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;