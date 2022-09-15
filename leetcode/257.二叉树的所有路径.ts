/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
function binaryTreePaths (root: TreeNode | null): string[] {
  const result: string[] = []
  dfs(root, '')
  return result

  function dfs (root: TreeNode | null, path: string) {
    if (root) {
      path += root.val.toString()
      if (root.left === null && root.right === null) {
        result.push(path)
      } else {
        path += '->'
        dfs(root.left, path)
        dfs(root.right, path)
      }
    }
  }
}
// @lc code=end
