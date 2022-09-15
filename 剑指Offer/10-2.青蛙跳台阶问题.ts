// 超时
// function numWays (n: number): number {
//   if (n === 0) return 1
//   if (n === 1) return 1
//   if (n === 2) return 2
//   const result = numWays(n - 1) + numWays(n - 2)
//   return result % (1e9 + 7)
// }

function numWays (n: number): number {
  const result = [1, 1]
  let index = 0
  if (n >= 2) {
    for (let i = 2; i <= n; i++) {
      index = i % 2
      result[index] = (result[0] + result[1]) % (1e9 + 7)
    }
  }
  return result[index]
}

console.log(numWays(44))
