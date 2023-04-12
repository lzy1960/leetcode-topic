/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku (board: string[][]): boolean {
  const rows = Array(9).fill(0).map(() => Array(9).fill(0))
  const cols = Array(9).fill(0).map(() => Array(9).fill(0))
  const threeSquare = Array(3).fill(0).map(() => Array(3).fill(0).map(() => Array(9).fill(0)))

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cols.length; j++) {
      const index = +board[i][j] - 1
      if (board[i][j] !== '.') {
        rows[i][index]++
        cols[j][index]++
        threeSquare[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        if (rows[i][index] > 1 || cols[j][index] > 1 || threeSquare[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }
  return true
};
isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
])

// @lc code=end
