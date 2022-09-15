function getLeastNumbers (arr: number[], k: number): number[] {
  const res = new Array(k)
  arr.sort((a, b) => a - b)
  for (let i = 0; i < k; ++i) {
    res[i] = arr[i]
  }
  return res
}
