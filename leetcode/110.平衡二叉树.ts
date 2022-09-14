/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 自顶向下
var isBalanced = function (root) {
  if (!root) return true
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)

  function depth (root) {
    if (!root) return 0
    return Math.max(depth(root.left), depth(root.right)) + 1
  }
};

// 自底向上
var isBalanced = function (root) {
  return recur(root) !== -1

  function recur (root) {
    if (!root) return 0
    const left = recur(root.left)
    if (left === -1) return -1
    const right = recur(root.right)
    if (right === -1) return -1
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }
};
// @lc code=end
