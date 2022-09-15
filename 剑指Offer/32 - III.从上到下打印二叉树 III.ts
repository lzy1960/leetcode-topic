function levelOrder (root: TreeNode | null): number[][] {
  if (!root) return []
  const result: number[][] = []
  const queue = [root]
  let level = 0
  while (queue.length) {
    const curArr: number[] = []
    for (const item of queue) {
      curArr.push(item.val)
    }
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift()!
      if (cur.left) queue.push(cur.left)
      if (cur.right) queue.push(cur.right)
    }
    if (level % 2) {
      curArr.reverse()
    }
    level++
    result.push(curArr)
  }
  return result
}
