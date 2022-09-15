// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// A B C E
// S F C S
// A D E E
// 输出：true

function exist (board: string[][], word: string): boolean {
  const width = board[0].length
  const height = board.length
  // 每个方格都可以是开始遍历的起点
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false

  function dfs (i, j, k) {
    // 越界并且单词不一致，直接返回false
    if (i >= height || i < 0 || j >= width || j < 0 || board[i][j] !== word[k]) {
      return false
    }
    // 长度一样，说明找到这个路径了
    if (k === word.length - 1) {
      return true
    }
    // 遍历到这个字符，就把他置空
    board[i][j] = ''
    // 递归上下左右看看是不是符合
    const res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
    board[i][j] = word[k]
    return res
  }
}

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'))
