/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  let res = new Array(k)
  arr.sort((a, b) => a - b)
  for (let i = 0; i < k; ++i) {
    res[i] = arr[i]
  }
  return res
};