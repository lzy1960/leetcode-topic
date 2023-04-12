/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum (nums: number[], target: number): number[][] {
  const result: number[][] = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    // 重复的跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 重复的跳过
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }

      let l = j + 1, r = nums.length - 1
      while (l < r) {
        // console.log('l和r是', l, r)
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]])
          while (nums[l] === nums[l + 1]) {
            l++
            continue
          }
          l++
          while (nums[r] === nums[r - 1]) {
            r--
            continue
          }
          r--
        }
        if (sum < target) {
          l++
          continue
        }
        if (sum > target) {
          r--
          continue
        }
      }
    }
  }
  return result
};
// fourSum([1, 0, -1, 0, -2, 2], 0)
// fourSum([2, 2, 2, 2, 2], 8)
// fourSum([0, 0, 0, 0], 1)
// fourSum([-2, -1, -1, 1, 1, 2, 2], 0)
fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11)
// @lc code=end
