/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 二分查找
  let l = 0, r = x
  while (l <= r) {
    let mid = l + parseInt((r - l) / 2)
    // let mid = l + ((r - l) >> 1)  // 这样写是防止溢出【x>>1 表示x除以2并取整，缩小一下遍历的范围】
    if (mid * mid <= x) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return r
}
