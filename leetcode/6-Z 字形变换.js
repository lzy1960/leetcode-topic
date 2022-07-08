/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// P   A   H   N
// A P L S I I G
// Y   I   R

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

// 1. 用矩阵
var convert = function (s, numRows) {
  if (numRows < 2) return s
  const len = s.length
  const t = numRows * 2 - 2 // t表示周期
  const c = Math.floor((len + t - 1) / t) * (numRows - 1);
  const mat = new Array(numRows).fill(0).map(() => new Array(c).fill(0))

  for (let i = x = y = 0; i < len; ++i) {
    const char = s[i];
    mat[x][y] = char
    if (i % t + 1 < numRows) {
      ++x // 向下移动
    } else {
      --x
      ++y // 向右上移动
    }
  }
  console.log(mat)
  const result = []
  for (const row of mat) {
    for (const col of row) {
      if (col) {
        result.push(col)
      }
    }
  }
  return result.join('')
};

// 2. 矩阵优化
var convert = function (s, numRows) {
  if (numRows < 2) return s
  const len = s.length
  const t = numRows * 2 - 2 // t表示周期
  const mat = new Array(numRows).fill(0).map(() => ([]))

  for (let i = x = 0; i < len; ++i) {
    const char = s[i];
    mat[x].push(char)
    if (i % t + 1 < numRows) {
      ++x // 向下移动
    } else {
      --x
    }
  }
  console.log(mat)
  const result = []
  for (const row of mat) {
    result.push(row.join(''))
  }
  return result.join('')
};

// 3. 直接构造
// 0             0+t                    0+2t                     0+3t
// 1      t-1    1+t            0+2t-1  1+2t            0+3t-1   1+3t
// 2  t-2        2+t  0+2t-2            2+2t  0+3t-2             2+3t  
// 3             3+t                    3+2t                     3+3t
var convert = function (s, numRows) {
  const len = s.length;
  if (numRows === 1 || numRows >= len) {
    return s;
  }
  const t = numRows * 2 - 2;
  const ans = [];
  for (let i = 0; i < numRows; i++) { // 枚举矩阵的行
    for (let j = 0; j < len - i; j += t) { // 枚举每个周期的起始下标
      ans.push(s[j + i]); // 当前周期的第一个字符
      if (0 < i && i < numRows - 1 && j + t - i < len) {
        ans.push(s[j + t - i]); // 当前周期的第二个字符
      }
    }
  }
  return ans.join('');
};

console.log(convert('PAYPALISHIRING', 3))