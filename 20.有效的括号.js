/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    '[': ']',
    '(': ')',
    '{': '}'
  }
  const stack = []
  for (let char of s) {
    if (!obj[char] && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(obj[char])
    }
  }
  return !stack.length
};