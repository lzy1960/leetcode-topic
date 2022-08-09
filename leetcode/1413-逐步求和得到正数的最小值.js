/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
var minStartValue = function (nums) {
  let sum = 0, sumMin = 0
  for (const num of nums) {
    sum += num
    sumMin = Math.min(sum, sumMin)
  }
  return 1 - sumMin
};

console.log(minStartValue([1, -2, -3]))