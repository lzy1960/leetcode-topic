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
function postorderTraversal (root: TreeNode | null): number[] {
  const result: number[] = []
  read(root)
  function read (node: typeof root): (typeof root)[] {
    if (!root) return []
    if (node.left) read(node.left)
    if (node.right) read(node.right)
    result.push(node.val)
  }
  return result
}
