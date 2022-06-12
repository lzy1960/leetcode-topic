/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let left = s.slice(0, n)
  let right = s.slice(n)
  return right + left
};