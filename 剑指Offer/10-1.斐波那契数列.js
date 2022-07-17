/**
 * @param {number} n
 * @return {number}
 */
// 超时
// var fib = function (n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   let result = fib(n - 1) + fib(n - 2)
//   return result % (1e9 + 7)
// };

var fib = function (n) {
  let fibon = [0, 1]
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      fibon[i] = (fibon[i - 1] + fibon[i - 2]) % (1e9 + 7)
    }
  }
  return fibon[n]
}

console.log(fib(5))