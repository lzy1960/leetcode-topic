function twoSum (nums: number[], target: number): number[] {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) !== undefined) {
      return [i, map.get(nums[i])]
    } else {
      map.set(target - nums[i], i)
    }
  }
  return []
};
