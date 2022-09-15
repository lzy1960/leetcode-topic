/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
function isSameTree (p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true
  if (p === null || q === null) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end
