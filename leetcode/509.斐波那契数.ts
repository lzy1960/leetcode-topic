/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib (n: number): number {
  const temp: [number, number] = [0, 1]
  if (n === 0) return 0
  if (n === 1) return 1
  for (let i = 2; i <= n; i++) {
    temp[i % 2] += temp[(i - 1) % 2]
  }
  return temp[n % 2]
}
// @lc code=end
