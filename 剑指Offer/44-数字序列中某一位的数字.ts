function findNthDigit (n: number): number {
  let digit = 1
  let start = 1
  let count = 9
  while (n > count) {
    n -= count
    digit += 1
    start *= 10
    count = digit * start * 9
  }
  const num = start + (n - 1) / digit
  return parseInt(num.toString().charAt((n - 1) % digit))
}
