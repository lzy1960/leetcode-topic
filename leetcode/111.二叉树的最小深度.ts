/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
// 深度优先
var minDepth = function (root) {
  if (!root) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  if (root.left === null || root.right === null) return left + right + 1
  return Math.min(left, right) + 1
};

// 广度优先
var minDepth = function (root) {
  const queue = [[root, 1]]
  while (queue.length) {
    const [node, depth] = queue.shift()
    if (node && !node.left && !node.right) {
      return depth
    }
    if (node) {
      queue.push([node.left, depth + 1])
      queue.push([node.right, depth + 1])
    }
  }
  return 0
};
// @lc code=end
