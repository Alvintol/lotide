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

module.exports = eqObjects;