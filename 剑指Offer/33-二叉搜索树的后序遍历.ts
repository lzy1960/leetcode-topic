// 递归分治
function verifyPostorder (postorder: number[]): boolean {
  return recur(postorder, 0, postorder.length - 1)

  function recur (postorder, i, j) {
    if (i >= j) return true
    let p = i
    while (postorder[p] < postorder[j]) p++
    const m = p
    while (postorder[p] > postorder[j]) p++
    return p === j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1)
  }
}

// 辅助单调栈
function verifyPostorder1 (postorder: number[]): boolean {
  const stack: number[] = []
  let root = Number.MAX_SAFE_INTEGER
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (postorder[i] > root) return false
    while (stack.length && postorder[i] < stack[stack.length - 1]) {
      root = stack.pop()!
    }
    stack.push(postorder[i])
  }
  return true
}

console.log(verifyPostorder([1, 3, 2, 6, 5]))
