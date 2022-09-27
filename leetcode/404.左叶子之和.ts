/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves (root: TreeNode | null): number {
  if (!root) return 0
  return dfs(root)

  function dfs (root: TreeNode): number {
    let sum = 0
    if (root.left) {
      sum += isLeafNode(root.left) ? root.left.val : dfs(root.left)
    }
    if (root.right && !isLeafNode(root.right)) {
      sum += dfs(root.right)
    }
    return sum
  }
  function isLeafNode (node: TreeNode) {
    return !node.left && !node.right
  }
}
// @lc code=end
