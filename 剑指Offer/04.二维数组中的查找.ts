function findNumberIn2DArray (matrix: number[][], target: number): boolean {
  if (!matrix || !matrix.length || !matrix[0].length) return false
  const width = matrix[0].length
  const height = matrix.length
  let x = width - 1
  let y = 0
  while (y < height && y >= 0) {
    const num = matrix[y][x]
    if (num === target) return true
    if (num > target) {
      x--
    } else {
      y++
    }
  }
  return false
}
