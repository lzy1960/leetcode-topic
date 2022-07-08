/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (!strs.length) return []

  const map = new Map()
  for (let str of strs) {
    const characters = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const ascii = str[i].charCodeAt() - 97
      characters[ascii]++
    }
    const key = characters.join('.')
    if (map.has(key)) {
      map.set(key, [...map.get(key), str])
    } else {
      map.set(key, [str])
    }
  }

  const result = []
  for (const arr of map) {
    result.push(arr[1])
  }
  return result
};