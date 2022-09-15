function search (nums: number[], target: number): number {
  if (!nums.length) return -1
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num < target) {
      low = mid + 1
    } else if (num > target) {
      high = mid - 1
    }
  }
  return -1
}
