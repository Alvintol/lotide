const countLetters = sentence => {
  let splitStr = sentence.split(' ').join('').split('');
  let count = {};
  splitStr.forEach(letter => { count[`${letter}`] ? count[`${letter}`]++ : count[`${letter}`] = 1});
  return count;
};

module.exports = countLetters;