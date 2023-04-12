/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide (dividend: number, divisor: number): number {
  const MAX = 2 ** 31 - 1
  const MIN = (-2) ** 31
  const result = parseInt(`${dividend / divisor}`)
  if (result > MAX) return MAX
  if (result < MIN) return MIN
  return result
}
divide(10, 3)
// @lc code=end
