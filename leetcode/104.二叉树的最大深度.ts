/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
function maxDepth (root: TreeNode | null): number {
  if (!root) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}
// @lc code=end
