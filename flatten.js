const flatten = target => {
  let copy = [];

  target.forEach(item => {
    Array.isArray(item) ? item.forEach(nested => {copy.push(nested)}) : copy.push(item);
  });
  return copy;
};

module.exports = flatten;
