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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  const res = []
  const path = []
  recur(root, target)
  return res

  function recur (root, tar) {
    if (root === null) return
    path.push(root.val)
    tar -= root.val
    if (tar === 0 && root.left === null && root.right === null) {
      res.push([...path])
    }
    recur(root.left, tar)
    recur(root.right, tar)
    path.pop()
  }
};  