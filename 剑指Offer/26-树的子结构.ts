function isSubStructure (A: TreeNode | null, B: TreeNode | null): boolean {
  return (A !== null && B !== null) &&
    (recur(A, B) ||
      isSubStructure(A.left, B) ||
      isSubStructure(A.right, B))

  // 判断以A为根节点的子树是否包含B
  function recur (A: TreeNode | null, B: TreeNode | null) {
    // 如果B为空，说明B匹配完成
    if (B === null) return true
    // 如果A为空，说明A没匹配完；如果A和B不一样，就不匹配
    if (A === null || A.val !== B.val) return false
    return recur(A.left, B.left) && recur(A.right, B.right)
  }
}
