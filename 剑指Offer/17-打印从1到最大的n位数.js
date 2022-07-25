/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let count = 10 ** n
  return Array(count - 1).fill(n - 1).map((_, index) => index + 1)
};

console.log(printNumbers(3))