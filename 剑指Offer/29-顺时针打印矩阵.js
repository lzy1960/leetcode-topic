/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1, x = 0
  let res = new Array((r + 1) * (b + 1))
  while (true) {
    // 从左往右
    for (let i = l; i <= r; i++) res[x++] = matrix[t][i]
    if (++t > b) break
    // 从上往下
    for (let i = t; i <= b; i++) res[x++] = matrix[i][r]
    if (l > --r) break
    // 从右往左
    for (let i = r; i >= l; i--) res[x++] = matrix[b][i]
    if (t > --b) break
    // 从下往上
    for (let i = b; i >= t; i--) res[x++] = matrix[i][l]
    if (++l > r) break
  }
  return res
};