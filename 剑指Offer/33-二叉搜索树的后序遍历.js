/**
 * @param {number[]} postorder
 * @return {boolean}
 */

// 递归分治
var verifyPostorder = function (postorder) {
  return recur(postorder, 0, postorder.length - 1)

  function recur (postorder, i, j) {
    if (i >= j) return true
    let p = i
    while (postorder[p] < postorder[j]) p++
    let m = p
    while (postorder[p] > postorder[j]) p++
    return p === j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1)
  }
};

// 辅助单调栈
var verifyPostorder = function (postorder) {
  const stack = []
  let root = Number.MAX_SAFE_INTEGER
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (postorder[i] > root) return false
    while (stack.length && postorder[i] < stack[stack.length - 1]) {
      root = stack.pop()
    }
    stack.push(postorder[i])
  }
  return true
}

console.log(verifyPostorder([1, 3, 2, 6, 5]))