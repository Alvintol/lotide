const without = (source, remove) => {
  let copy = [...source];
  copy.forEach(item => {
    remove.forEach(target => {
      if (item === target) {
        copy.splice(copy.indexOf(item), 1);
      }
    });
  });
  return copy
};

module.exports = without;