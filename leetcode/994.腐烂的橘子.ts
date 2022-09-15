function orangesRotting (grid: number[][]): number {
  const queue: [number, number][] = []
  const height = grid.length
  const width = grid[0].length
  let goodOrange = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        goodOrange++
      }
    }
  }

  if (!goodOrange) return 0
  let level = 0
  const dx = [0, 1, 0, -1]
  const dy = [1, 0, -1, 0]
  while (queue.length) {
    const len = queue.length
    level++
    for (let i = 0; i < len; i++) {
      const cur = queue.shift()!
      for (let j = 0; j < 4; j++) {
        const x = cur[0] + dx[j]
        const y = cur[1] + dy[j]
        if (x < 0 || y < 0 || x >= height || y >= width || grid[x][y] !== 1) continue
        queue.push([x, y])
        grid[x][y] = 2
        goodOrange--
      }
    }
  }
  return goodOrange ? -1 : level - 1
}
console.log(orangesRotting([
  [2, 1, 2],
  [1, 1, 1],
  [2, 1, 2],
]))
