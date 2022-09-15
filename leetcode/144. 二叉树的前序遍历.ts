function preorderTraversal (root: TreeNode | null): number[] {
  const result: number[] = []
  read(root)
  function read (node: typeof root): (typeof root)[] {
    if (root === null) return []
    result.push(node.val)
    if (node.left) read(node.left)
    if (node.right) read(node.right)
  }
  return result
}
