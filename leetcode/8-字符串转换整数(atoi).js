/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const count = parseInt(s)
  if (isNaN(count)) {
    return 0
  } else if (count > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  } else if (count < -(2 ** 31)) {
    return -(2 ** 31)
  } else {
    return count
  }
};