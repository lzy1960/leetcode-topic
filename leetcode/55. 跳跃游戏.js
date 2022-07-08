/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const totalLength = nums.length
  const memo = Array(totalLength).fill(0)
  // dp
  memo[totalLength - 1] = 1

  function jump (position) {
    if (memo[position] === 1) return true
    else if (memo[position] === -1) return false

    const maxJump = Math.min(position + nums[position], totalLength - 1)
    for (let i = position + 1; i <= maxJump; i++) {
      const jumpResult = jump(i)
      if (jumpResult === true) {
        memo[position] = 1
        return true
      }
    }
    memo[position] = -1
    return false
  }

  let result = jump(0)
  return result
};

var canJump1 = function (nums) {
  const totalLength = nums.length
  const memo = Array(totalLength).fill(0)
  memo[totalLength - 1] = 1

  for (let i = totalLength - 2; i >= 0; i--) {
    const maxJump = Math.min(i + nums[i], totalLength - 1)
    for (let j = i + 1; j <= maxJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1
        break
      }
    }
  }
  if (memo[0] === 1) {
    return true
  } else {
    return false
  }
};

// 贪心
var canJump1 = function (nums) {
  let maxJump = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= maxJump) {
      maxJump = i
    }
  }
  return maxJump === 0
};