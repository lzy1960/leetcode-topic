/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let temp = []
  for (let num of nums) {
    if (~temp.indexOf(num)) {
      return num
    }
    temp.push(num)
  }
};