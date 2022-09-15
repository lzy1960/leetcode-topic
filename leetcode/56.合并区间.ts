function merge (intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals

  // 先排序
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  console.log(intervals)

  let cur = intervals[0]
  const result: number[][] = []
  for (const interval of intervals) {
    if (interval[0] <= cur[1]) {
      cur[1] = Math.max(cur[1], interval[1])
    } else {
      result.push(cur)
      cur = interval
    }
  }
  if (cur.length) {
    result.push(cur)
  }
  return result
}
