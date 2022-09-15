function pathSum (root: TreeNode | null, target: number): number[][] {
  const res: (typeof path)[] = []
  const path: number[] = []
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
}
