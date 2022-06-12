/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function (root) {
  const isMirror = (left, right) => {
      if (!left && !right) return true
      if (!left || !right || left.val !== right.val) return false
      return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  return root ? isMirror(root.left, root.right) : true
};