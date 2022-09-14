/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
  // [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9]
  // ]
  if (!matrix.length) return []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let result = []
  let direction = 'right'

  while (top <= bottom && left <= right) {
      if (direction === 'right') {
          for (let i = left; i <= right; i++) {
              result.push(matrix[top][i])
          }
          top++
          direction = 'bottom'
      } else if (direction === 'bottom') {
          for (let i = top; i <= bottom; i++) {
              result.push(matrix[i][right])
          }
          right--
          direction = 'left'
      } else if (direction === 'left') {
          for (let i = right; i >= left; i--) {
              result.push(matrix[bottom][i])
          }
          bottom--
          direction = 'top'
      } else if (direction === 'top') {
          for (let i = bottom; i >= top; i--) {
              result.push(matrix[i][left])
          }
          left++
          direction = 'right'
      }
  }
  return result
};