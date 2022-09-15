// 超时
// function fib (n: number): number {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   const result = fib(n - 1) + fib(n - 2)
//   return result % (1e9 + 7)
// }

function fib (n: number): number {
  const fibon = [0, 1]
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      fibon[i] = (fibon[i - 1] + fibon[i - 2]) % (1e9 + 7)
    }
  }
  return fibon[n]
}

console.log(fib(5))
