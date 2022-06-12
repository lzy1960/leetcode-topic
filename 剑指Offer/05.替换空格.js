/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function (s) {
  let result = ''
  for (let char of s) {
      if (char === ' ') {
          result += '%20'
      } else {
          result += char
      }
  }
  return result
};