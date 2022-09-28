/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree (root: TreeNode | null): number {
  let max = 0
  dfs(root)
  return max - 1

  function dfs (root: TreeNode | null) {
    if (root === null) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    max = Math.max(left + right + 1, max)
    return Math.max(left, right) + 1
  }
}

// @lc code=end
