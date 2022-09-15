/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  const s = n.toString(2)
  let count = 0
  for (const char of s) {
    if (char === '1') {
      count++
    }
  }
  return count
}

console.log(hammingWeight(11))
