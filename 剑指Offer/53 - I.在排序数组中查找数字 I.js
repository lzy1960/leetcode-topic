/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0
  for (let char of nums) {
    if (char === target) {
      count++
    }
  }
  return count
};