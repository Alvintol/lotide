const map = (array, callback) => {
  let result = [];
  
  array.forEach(word => result.push(callback(word)));
  return result;
};
module.exports = map;