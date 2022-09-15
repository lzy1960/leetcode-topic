/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
function isBalanced (root: TreeNode | null): boolean {
  if (!root) return true
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)

  function depth (root) {
    if (!root) return 0
    return Math.max(depth(root.left), depth(root.right)) + 1
  }
}

// 自底向上
function isBalanced1 (root: TreeNode | null): boolean {
  return recur(root) !== -1

  function recur (root: TreeNode | null) {
    if (!root) return 0
    const left = recur(root.left)
    if (left === -1) return -1
    const right = recur(root.right)
    if (right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }
}
// @lc code=end
