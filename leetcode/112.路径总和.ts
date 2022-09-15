/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
function hasPathSum (root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  if (root.left === null && root.right === null) {
    return targetSum === root.val
  }
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}
// @lc code=end
