/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
function inorderTraversal (root: TreeNode | null): number[] {
  const result: number[] = []
  traverse(root)
  return result

  function traverse (root: TreeNode | null) {
    if (!root) return
    traverse(root.left)
    result.push(root.val)
    traverse(root.right)
  }
}
// @lc code=end
