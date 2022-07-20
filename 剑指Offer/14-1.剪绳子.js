/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n <= 3) return n - 1
  let a = parseInt(n / 3)
  let b = n % 3
  if (b === 0) return 3 ** a
  if (b === 1) return 3 ** (a - 1) * 4
  return 3 ** a * 2
};

console.log(cuttingRope(18))