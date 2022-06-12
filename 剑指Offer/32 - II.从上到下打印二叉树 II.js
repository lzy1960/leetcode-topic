/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    const curArr = []
    for (let item of queue) {
      curArr.push(item.val)
    }
    for (let i = 0, len = queue.length; i < len; i++) {
      let cur = queue.shift()
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    result.push(curArr)
  }
  return result
};