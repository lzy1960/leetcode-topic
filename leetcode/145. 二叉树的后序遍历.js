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
 * @return {number[]}
 */
 var postorderTraversal = function (root) {
  const result = []
  read(root)
  function read (node) {
    if (!root) return []
    if (node.left) read(node.left)
    if (node.right) read(node.right)
    result.push(node.val)
  }
  return result
};