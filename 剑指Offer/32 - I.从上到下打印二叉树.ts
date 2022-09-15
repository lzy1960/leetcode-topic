function levelOrder (root: TreeNode | null): number[] {
  if (!root) return []
  const result: number[] = []
  const queue = [root]
  while (queue.length) {
    const cur = queue.shift()!
    result.push(cur.val)
    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
  return result
}
