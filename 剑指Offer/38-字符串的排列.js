/**
 * @param {string} s
 * @return {string[]}
 */
// 仿照全排列
var permutation = function (s) {
  let res = new Set()
  let path = []
  backtracking(s.split(''), s.length, [])
  return [...res]

  function backtracking (sArr, len, used) {
    if (path.length === len) {
      res.add(path.join(''))
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(sArr[i])
      used[i] = true
      backtracking(sArr, len, used)
      path.pop()
      used[i] = false
    }
  }
};