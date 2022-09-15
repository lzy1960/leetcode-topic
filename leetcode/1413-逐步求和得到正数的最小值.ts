// 贪心
function minStartValue (nums: number[]): number {
  let sum = 0
  let sumMin = 0
  for (const num of nums) {
    sum += num
    sumMin = Math.min(sum, sumMin)
  }
  return 1 - sumMin
}

console.log(minStartValue([1, -2, -3]))
