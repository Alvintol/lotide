const letterPositions = (sentence) => {
  const result = {};
  let splitStr = sentence.split('');

  for (const letterIndex in splitStr) {
    let letter = splitStr[letterIndex];
    if (letter === ' ') {
    } else if (result[letter]) {
      result[letter].push(letterIndex);
    } else {
      result[letter] = [letterIndex];
    }
  }
  return result;
};
module.exports = letterPositions;