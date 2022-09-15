/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
function sortedArrayToBST (nums: number[]): TreeNode | null {
  return dfs(nums, 0, nums.length - 1)

  function dfs (nums: number[], lo: number, hi: number) {
    if (lo > hi) return null
    const mid = Math.ceil(lo + (hi - lo) / 2)
    const root = new TreeNode(nums[mid])
    root.left = dfs(nums, lo, mid - 1)
    root.right = dfs(nums, mid + 1, hi)
    return root
  }
}
// @lc code=end
