/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return -1
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    let mid = Math.floor((high - low) / 2) + low
    let num = nums[mid]
    if (num === target) {
      return mid
    } else if (num < target) {
      low = mid + 1
    } else if (num > target) {
      high = mid - 1
    }
  }
  return -1
};