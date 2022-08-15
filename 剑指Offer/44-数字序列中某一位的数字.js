/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let digit = 1
  let start = 1
  let count = 9
  while (n > count) {
    n -= count
    digit += 1
    start *= 10
    count = digit * start * 9
  }
  let num = start + (n - 1) / digit
  return num.toString().charAt((n - 1) % digit) - '0'
}