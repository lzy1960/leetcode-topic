// 超时
// function myPow (x: number, n: number): number {
//   let res = 1
//   const _n = n >= 0 ? n : -n
//   if (n === 0) return 1
//   for (let i = 0; i < _n; i++) {
//     res *= x
//   }
//   if (n > 0) {
//     return res
//   } else {
//     return 1 / res
//   }
// }

// 递归
function myPow (x: number, n: number): number {
  if (n === 0) return 1
  if (n < 0) return 1 / myPow(x, -n)
  // n & 1 === true 判断是否为奇数
  if (n % 2 === 0) return myPow(x * x, n / 2)
  return x * myPow(x, n - 1)
}

console.log(myPow(2, -10))
