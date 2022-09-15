/**
 * 篮球赛，10人，每个人有一个战斗力n1-n10，分成两组（人数相等），战斗力差值最小
 */
function basketballAverage (nums) {
  let minValue = Number.MAX_VALUE
  // 全排列
  const path = []
  dfs(nums, nums.length, [])
  return minValue

  function dfs (nums, len, used) {
    if (path.length === len) {
      const leftTotal = path.slice(0, 5).reduce((prev, cur) => prev + cur)
      const rightTotal = path.slice(5, 10).reduce((prev, cur) => prev + cur)
      minValue = Math.min(Math.abs(leftTotal - rightTotal), minValue)
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue
      path.push(nums[i])
      used[i] = true
      dfs(nums, len, used)
      path.pop()
      used[i] = false
    }
  }
}

console.log(basketballAverage([56, 165, 18, 91, 6, 51, 51, 3, 132, 1]))

/**
 * 数组最长连续子序列和为固定值
 */
function maxLength (arr, target) {
  if (!arr || !arr.length) return 0
  let sum = 0
  let result = 0
  const map = new Map()
  map.set(0, -1)
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    if (map.has(sum - target)) {
      result = Math.max(i - map.get(sum - target), result)
    }
    if (!map.has(sum)) {
      map.set(sum, i)
    }
  }
  return result
}

console.log(maxLength([1, 2, 3, 4, 2, 1, 1, 1, 1], 6))

/**
 * 停车位问题
 * 有一横排停车位，有至少一个车位停了车，也至少有一个车位没停车。
 * 一个车位有车用1表示，无车用0表示。
 * 为了避免剐蹭，请为司机规划停在那个车位，距离其他车中间间隔的车位最远。
 * 输入：一组数据，代表目前车位的状态。
 * 输出：当前车辆停车距离其他车辆的最大间距
 */
function maxDistance (arr) {
  let maxDis = 0
  const str = arr.join('')
  const strList = str.split('1')
  for (const s of strList) {
    if (s.length === 0) continue
    if (s.length % 2 === 0) {
      maxDis = Math.max(Math.floor(s.length / 2), maxDis)
    } else {
      maxDis = Math.max(Math.floor(s.length / 2) + 1, maxDis)
    }
    if (s.charAt(0) === '0') {
      maxDis = Math.max(strList[0].length, maxDis)
    }
    if (s.charAt(str.length - 1) === '0') {
      maxDis = Math.max(strList[strList.length - 1].length, maxDis)
    }
  }
  return maxDis
}

console.log(maxDistance([1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0]))

/**
 * 为了提升数据传输的效率，会对传输的报文进行压缩处理。
 * 输入一个压缩后的报文，请返回它解压后的原始报文。
 * 压缩规则：n[str]，表示方括号内部的 str 正好重复 n 次。
 * 注意 n 为正整数（0 < n <= 100），str只包含小写英文字母，不考虑异常情况。
 */
function parseMessage (str) {
  let totalStr = ''
  let tempStr = ''
  let count = ''
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ']') {
      tempStr = ''

      while (stack.length) {
        const value = stack.pop()
        if (/^[a-z]/ig.test(value)) {
          if (count) {
            const waitStr = tempStr
            for (let j = 0; j < count - 1; j++) {
              tempStr += waitStr
            }
          }
          tempStr = value + tempStr
        } else if (Number.isInteger(value / 1)) {
          count = value + count
        } else {
          // 前括号
          count = ''
        }
      }
      // 结束以后在执行一次
      if (count) {
        const waitStr = tempStr
        for (let j = 0; j < count - 1; j++) {
          tempStr += waitStr
        }
      }
      totalStr += tempStr
    }
    stack.push(str[i])
  }
  return totalStr
}
console.log(parseMessage('2[m2[b]]'))

/**
 * 给定两个字符集合， 一个是全量字符集， 一个是已占用字符集， 已占用字符集中的字符不能再使用， 要求输出剩余可用字符集。
 *
 *输入描述
 *
 *输入一个字符串 一定包含@，@前为全量字符集 @后的为已占用字符集
 *已占用字符集中的字符，一定是全量字符集中的字符，字符集中的字符跟字符之间使用英文逗号隔开
 *每个字符都表示为字符+数字的形式，用英文冒号分隔，比如a:1标识一个a字符
 *字符只考虑英文字母，区分大小写，数字只考虑正整型 不超过100
 *如果一个字符都没被占用，@标识仍存在
 *输出描述：
 *
 *输出可用字符集，
 *不同的输出字符集之间用回车换行，
 *注意：输出的字符顺序要跟输入的一致，不能输出b:3,a:2,c:2
 *如果某个字符已全部占用，则不需要再输出
 */
function stringSum (str) {
  const [totalStr, usedStr] = str.split('@')
  const totalMap = new Map(totalStr.split(',').map((item) => {
    const arr = item.split(':')
    arr[1] *= 1
    return arr
  }))
  const usedMap = new Map(usedStr.split(',').map((item) => {
    const arr = item.split(':')
    arr[1] *= 1
    return arr
  }))

  // 遍历第一个对象
  for (const [key, value] of totalMap) {
    totalMap.set(key, value - (usedMap.get(key) || 0))
    if (value >= usedMap.get(key)) {
      usedMap.delete(key)
    }
  }

  const totalMapStr = [...totalMap].map(item => item.join(':')).join(',')
  const usedMapStr = [...usedMap].map(item => item.join(':')).join(',')
  if (usedMap.size) {
    return `${totalMapStr}@${usedMapStr}`
  }
  return totalMapStr
}
console.log(stringSum('a:3,b:5,c:2@a:1,b:2'))

/**
 * 数组求和
 * 给定一个数组，编写一个函数来计算它的最大N个数与最小N个数的和。你需要对数组进行去重。
 * 说明：
 * 数组中数字范围[0, 1000]
 * 最大N个数与最小N个数不能有重叠，如有重叠，输入非法返回-1
 * 输入非法返回-1
 * 输入描述:
 * 第一行输入M， M标识数组大小
 * 第二行输入M个数，标识数组内容
 * 第三行输入N，N表达需要计算的最大、最小N个数
 * 输出描述:
 * 输出最大N个数与最小N个数的和。
 */
function arraySum (num, arrStr, count) {
  if (num < count * 2) {
    return -1
  }
  const arr = arrStr.split(' ').sort((a, b) => a - b)
  const smallArr = arr.slice(0, count)
  const bigArr = arr.slice(-2)

  const concatArr = [...smallArr, ...bigArr]
  if (concatArr.length !== new Set(concatArr)) {
    return -1
  }
  const result = concatArr.reduce((prev, cur) => prev * 1 + cur * 1)
  return result
}
console.log('数组求和', arraySum('5', '3 2 3 4 2', '2'))

/**
 * 矩形相交的面积
 * 题目描述
 * 给出3组点坐标(x, y, w, h)，-1000<x,y<1000，w,h为正整数。
 * (x, y, w, h)表示平面直角坐标系中的一个矩形：
 * x, y为矩形左上角坐标点，w, h，向右w，向下h。
 * (x, y, w, h)表示 x 轴 (x, x+w) 和 y 轴 (y, y-h) 围成的矩形区域
 * (0, 0, 2, 2)表示 x 轴 (0, 2) 和 y 轴 (0, -2) 围成的矩形区域
 * (3, 5, 4, 6)表示 x 轴 (3, 7) 和 y 轴 (5, -1) 围成的矩形区域
 * 求3组坐标构成的矩形区域重合部分的面积。
 * 输入描述:
 * 3行输入分别为3个矩形的位置，分别代表“左上角x坐标”，“左上角y坐标”，“矩形宽w”，“矩形高h”
 * 参数限制如下：1000 <= x,y < 1000
 * 输出描述:
 * 输出 3 个矩形相交的面积，不相交的输出 0。
 */

function crossingArea (s1, s2, s3) {
  const [x1, y1, w1, h1] = s1.split(' ').map(Number)
  const [x2, y2, w2, h2] = s2.split(' ').map(Number)
  const [x3, y3, w3, h3] = s3.split(' ').map(Number)

  const crossWidth = Math.min(x1 + w1, x2 + w2, x3 + w3) - Math.max(x1, x2, x3)
  const crossHeight = Math.min(y1, y2, y3) - Math.max(y1 - h1, y2 - h2, y3 - h3)
  if (crossWidth < 0 || crossHeight < 0) {
    return 0
  }
  return crossWidth * crossHeight
}

console.log('矩形相交的面积', crossingArea(
  '1 6 4 4',
  '3 5 3 4',
  '0 3 7 3',
))

function minSwap (data, target) {
  let count = 0
  const arr = data.split(',').map((num) => {
    if (num > target) {
      count++
      return 1
    }
    return 0
  })

  let result = Number.MAX_VALUE
  for (let i = 0; i < arr.length - count; i++) {
    result = Math.min(arr.slice(i, i + count).filter(item => item === 0).length, result)
  }
  return result
}
console.log('最小交换次数', minSwap('1,3,1,4,0,0,0,3,0,4,4,0,0,4', '2'))

/**
 * 打印任务排序
 * 题目描述
 * 某个打印机根据打印队列执行打印任务。打印任务分为九个优先级，分别用数字1-9表示，数字越大优先级越高。
 * 打印机每次从队列头部取出第一个任务A，然后检查队列余下任务中有没有比A优先级更高的任务，如果有比A优先级高的任务，则将任务A放到队列尾部，否则就执行任务A的打印。
 * 请编写一个程序，根据输入的打印队列，输出实际的打印顺序。
 * 输入描述：
 * 输入一行，为每个任务的优先级，优先级之间用逗号隔开，优先级取值范围是1~9。
 * 输出描述：
 * 输出一行，为每个任务的打印顺序，打印顺序从0开始，用逗号隔开。
 */
function printPrinter (str) {
  const arr = str.split(',')
  const arr2 = [...arr]
  arr2.sort((a, b) => b - a)

  const indexArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const index = arr2.indexOf(arr[i])
    indexArr[i] = index
    arr2[index] = undefined
  }
  return indexArr.join(',')
}
console.log('打印任务排序', printPrinter('9,3,5,5'))

/**
 * 正方形数量
 * 题目描述
 * 输入N个互不相同的二维整数坐标，求这N个坐标可以构成的正方形数量。[内积为零的的两个向量垂直]
 * 输入描述:
 * 第一行输入为N，N代表坐标数量，N为正整数。N <= 100
 * 之后的 K 行输入为坐标 x y 以空格分隔，x，y为整数，-10 <= x, y <= 10
 * 输出描述:
 * 输出可以构成的正方形数量。
 */
function squareCount (count, ...args) {
  count = parseInt(count)
  console.log(args)
  const points = args.map(item => item.split(' ').map(Number))

  if (count < 4) return 0
  for (let i = 0; i < count; i++) {
    const p1 = points[i]
    for (let j = 1; j < count; j++) {
      const p2 = points[j]

    }
  }
}
console.log('正方形数量', squareCount('4', '0 0', '1 2', '3 1', '2 -1'))

/**
 * 最大连续子串长度
 * 题目描述
 * 给定字符串A、B和正整数V，A的长度与B的长度相等， 请计算A中满足如下条件的最大连续子串的长度：
 * 该连续子串在A和B中的位置和长度均相同。
 * 该连续子串 |A[i] – B[i]| 之和小于等于V。其中 |A[i] – B[i]| 表示两个字母ASCII码之差的绝对值。
 * 输入描述：
 * 输入为三行： 第一行为字符串A，仅包含小写字符，1 <= A.length <= 1000。
 * 第二行为字符串B，仅包含小写字符，1 <= B.length <= 1000。
 * 第三行为正整数V，0 <= V <= 10000。
 * 输出描述：
 * 字符串最大连续子串的长度，要求该子串 |A[i] – B[i]| 之和小于等于V。
 */

function maxString (str1, str2, target) {
  const readline = require('readline')
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  let linenum = 2
  const temp = []
  rl.on('line', (line) => {
    if (linenum == 2) {
      temp.push(line)
      linenum--
      return
    }
    if (linenum == 1) {
      temp.push(line)
      linenum--
      return
    }
    if (linenum == 0) {
      temp.push(parseInt(line))
      console.log(method(temp))
      rl.close()
    }
  })
  // rl.on('close', ()=>{
  // console.log(method(temp))
  // rl.close()
  // })
  const method = (arr) => {
    const [a, b, v] = arr
    const sum = []
    for (const i in a) {
      sum.push(Math.abs(a[i].charCodeAt() - b[i].charCodeAt()))
    }
    for (const i in sum) {
      if (i > 0) {
        sum[i] += sum[i - 1]
      }
    }
    console.log(sum)
    let p1 = -1; let p2 = 0; let maxL = 0
    let cur = sum[0]
    while (p2 < a.length) {
      if (p1 < 0) {
        cur = sum[p2]
      } else {
        cur = sum[p2] - sum[p1]
      }
      if (cur <= v) {
        maxL = Math.max(maxL, (p2 - p1))
        p2++
      } else {
        p1++
      }
    }
    return maxL
  }
}

/**
 * IPv4地址转换
 */
function parseIpv4 (str) {
  let ipArr = str.split('#')
  ipArr = ipArr.map((item) => {
    return parseInt(item).toString(2).padStart(8, 0)
  })
  return parseInt(ipArr.join(''), 2)
}
console.log('IPv4地址转换', parseIpv4('100#101#1#5'))


/**
 * 计算面积
 */

const [count, endX] = readline().split(' ').map(Number)

let total = 0
let prevX = 0
let curHeight = 0
while (line = readline()) {
  const [x, offsetY] = line.split(' ').map(Number)
  total += (x - prevX) * Math.abs(curHeight)
  prevX = x
  curHeight += offsetY
}
total += (endX - prevX) * Math.abs(curHeight)
console.log(total)

/**
 * 连续字母的长度
 */
function checkNumber (str, target) {
  let cur = ''
  // let count = 0
  // let countArr = []
  // let letterArr = []
  const arr = []

  if (str.length < target) {
    return -1
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (cur !== char) {
      // letterArr.push(char)
      // count = 1
      // countArr.push(1)
      arr.push([char, 1])
      cur = char
    } else {
      // count++
      // countArr[countArr.length - 1] = count
      arr[arr.length - 1][1] += 1
    }
  }

  // for (let i = 0; i < letterArr.length; i++) {
  //   arr.push([letterArr[i], countArr[i]])
  // }
  arr.sort((a, b) => b[1] - a[1])

  // 开始筛选
  const prev = []
  // let prevCount = 0
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    // if (prevCount !== item[1] && !prev.includes(item[0])) {
    // }
    if (target === 0) {
      return item[1]
    }
    if (!prev.includes(item[0])) {
      prev.push(item[0])
    }
    target--
    // prevCount = item[1]
  }
  return -1
}


// let str = readline()
// let target = parseInt(readline())

console.log(checkNumber('AAAABBBBAAABBBAABBAB', 3))
