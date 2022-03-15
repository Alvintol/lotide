const eqArrays = (first, second) => {
  let answer = true;
  for (let a of first) {
    if (first[a] !== second[a]) {
      answer = false;
    }
  } return answer;
};

module.exports = eqArrays;