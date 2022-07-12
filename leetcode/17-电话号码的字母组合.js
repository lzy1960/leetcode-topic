/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  let res = []
  const map = new Map()
  map.set(2, 'abc')
  map.set(3, 'def')
  map.set(4, 'ghi')
  map.set(5, 'jkl')
  map.set(6, 'mno')
  map.set(7, 'pqrs')
  map.set(8, 'tuv')
  map.set(9, 'wxyz')

  backTrack('', 0)

  return res

  function backTrack (curStr, index) {
    if (index > digits.length - 1) {
      res.push(curStr)
      return
    }
    const letters = map.get(digits[index] * 1)
    for (let i = 0; i < letters.length; i++) {
      const char = letters[i]
      backTrack(curStr + char, index + 1)
    }
  }
};

console.log(letterCombinations(''))