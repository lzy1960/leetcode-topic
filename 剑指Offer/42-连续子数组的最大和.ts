function maxSubArray (nums: number[]): number {
  let pre = 0
  let max = nums[0]
  for (const num of nums) {
    pre = Math.max(pre + num, num)
    max = Math.max(max, pre)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
