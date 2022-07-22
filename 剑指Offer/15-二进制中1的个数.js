/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  const s = n.toString(2)
  let count = 0
  for (let char of s) {
    if (char === '1') {
      count++
    }
  }
  return count
};

console.log(hammingWeight(11))