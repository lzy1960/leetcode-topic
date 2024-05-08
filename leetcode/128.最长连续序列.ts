/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length < 2) return nums.length;
  const arr = [...new Set(nums)].sort((a, b) => a - b);
  let max = 0;
  let count = 1;
  for (let j = 1; j < arr.length; j++) {
    const i = j - 1;
    if (arr[j] - arr[i] === 1) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 1;
    }
  }
  return Math.max(count, max);
};
// @lc code=end
