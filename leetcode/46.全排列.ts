function permute (nums: number[]): number[][] {
  const result: number[][] = []
  const path: number[] = []
  backtracking(nums, nums.length, [])
  return result

  function backtracking (nums, len, used) {
    if (path.length === len) {
      result.push([...path])
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      backtracking(nums, len, used)
      path.pop()
      used[i] = false
    }
  }
}
