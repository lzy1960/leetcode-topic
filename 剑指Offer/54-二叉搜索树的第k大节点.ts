// 二叉搜索树中序遍历为递减序列
// 所以可以转换为，中序遍历倒数第k个节点
function kthLargest (root: TreeNode | null, k: number): number {
  const roots: number[] = []
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
}
