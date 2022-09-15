function search (nums: number[], target: number): number {
  let count = 0
  for (const char of nums) {
    if (char === target) {
      count++
    }
  }
  return count
}
