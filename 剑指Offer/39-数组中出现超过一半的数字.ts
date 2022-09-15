// 摩尔投票法
const majorityElement = function (nums: number[]): number {
  let x = 0
  let votes = 0
  for (const num of nums) {
    if (votes === 0) x = num
    votes += num === x ? 1 : -1
  }
  return x
}
