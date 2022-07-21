/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n !== 1 && n < 4) {
    return n - 1;
  }
  const p = 1e9 + 7
  let max = 1;
  while (n > 4) {
    n = n - 3;
    max = max * 3 % p
  }
  max = max * n % p
  return max;
};

console.log(cuttingRope(10))
