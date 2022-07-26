/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 内存占用太高
// var exchange = function (nums) {
//   const oddList = []
//   const evenList = []
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i]
//     if (num % 2 === 0) {
//       evenList.push(num)
//     } else {
//       oddList.push(num)
//     }
//   }
//   return [...oddList, ...evenList]
// };

// 时间太慢
var exchange = function (nums) {
  const res = []
  while (nums.length) {
    const num = nums.shift()
    if (num % 2 === 0) {
      res.push(num)
    } else {
      res.unshift(num)
    }
  }
  return res
};

// 答案，双指针
var exchange = function (nums) {
  let i = 0, j = nums.length - 1, temp
  while (i < j) {
    while (i < j && nums[i] % 2 === 1) {
      i++
    }
    while (i < j && nums[j] % 2 === 0) {
      j--
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  return nums
}

console.log(exchange([8, 10, 3, 20, 12, 4, 10, 8, 4, 0, 5, 17, 7, 20, 3]))