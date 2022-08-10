/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树中序遍历为递减序列
// 所以可以转换为，中序遍历倒数第k个节点
var kthLargest = function (root, k) {
  let roots = []
  dfs(root)
  roots.reverse()
  return roots[--k]

  function dfs (node) {
    if (node !== null) {
      dfs(node.left)
      roots.push(node.val)
      dfs(node.right)
    }
  }
};