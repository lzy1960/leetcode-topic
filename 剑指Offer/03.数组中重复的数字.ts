function findRepeatNumber (nums: number[]): number {
  const temp: number[] = []
  for (const num of nums) {
    if (~temp.indexOf(num)) {
      return num
    }
    temp.push(num)
  }
  return 0
}
