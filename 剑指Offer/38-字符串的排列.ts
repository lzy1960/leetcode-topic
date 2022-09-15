// 仿照全排列
function permutation (s: string): string[] {
  const res: Set<string> = new Set()
  const path: string[] = []
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
}
