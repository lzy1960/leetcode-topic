// 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

function buildTree (preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) {
    return null
  }
  // 先序排序的第一个就是根
  const rootValue = preorder[0]
  // 找到根的下标
  const rootValueIndex = inorder.indexOf(rootValue)
  // 构建树
  const root = new TreeNode(rootValue)
  // preorder第二个元素是左区的第一个根节点，所以从第二个元素截取到根，inorder的左边就是0到根的下标
  root.left = buildTree(preorder.slice(1, rootValueIndex + 1), inorder.slice(0, rootValueIndex))
  // preorder截取根之后
  root.right = buildTree(preorder.slice(rootValueIndex + 1), inorder.slice(rootValueIndex + 1))
  return root
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
