function maxArea (height: number[]): number {
  const len = height.length
  let l = 0
  let r = len - 1
  let max = 0

  while (l < r) {
    const left = height[l]
    const right = height[r]
    const area = Math.min(left, right) * (r - l)
    max = Math.max(area, max)
    left < right ? l++ : r--
  }

  return max
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
