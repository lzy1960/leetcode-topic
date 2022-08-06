/**
 * @param {number[]} nums
 * @return {number}
 */
// 摩尔投票法
var majorityElement = function (nums) {
  let x = 0, votes = 0
  for (let num of nums) {
    if (votes === 0) x = num
    votes += num === x ? 1 : -1
  }
  return x
}