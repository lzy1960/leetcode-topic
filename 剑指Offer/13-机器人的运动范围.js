/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  // 初始化地图
  const visited = Array(m).fill(0).map(_ => Array(n).fill(false))

  // 计算数位和的辅助函数
  function sum (n) {
    let res = 0
    while (n) {
      res += n % 10
      n = Math.floor(n / 10)
    }
    return res
  }

  function dfs (x, y) {
    if (sum(x) + sum(y) > k || x >= m || y >= n || visited[x][y]) {
      return 0
    } else {
      visited[x][y] = true
      return 1 + dfs(x + 1, y) + dfs(x, y + 1)
    }
  }
  return dfs(0, 0)
};

console.log(movingCount(2, 3, 1))