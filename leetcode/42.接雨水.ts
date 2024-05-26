/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let left = 0
  let right = height.length - 1

  let leftMax = 0
  let rightMax = 0

  let result = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      result += leftMax - height[left]
      left++
    } else {
      result += rightMax - height[right]
      right--
    }
  }

  return result
};
// @lc code=end
