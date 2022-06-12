/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const frequency = _.countBy(s);
  for (const [i, ch] of Array.from(s).entries()) {
    if (frequency[ch] === 1) {
      return ch;
    }
  }
  return ' ';
};