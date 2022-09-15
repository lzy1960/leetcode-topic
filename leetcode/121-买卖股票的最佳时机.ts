// 1. 暴力解法(超出时间限制)
function maxProfit (prices: number[]): number {
  let result = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const delta = prices[j] - prices[i]
      if (delta > result) {
        result = delta
      }
    }
  }
  return result
}

// 2. 只遍历一次，每次都记录最低点
// 然后计算，如果当天卖出能挣的最多的钱
function maxProfit1 (prices: number[]): number {
  let min = Number.MAX_SAFE_INTEGER
  let maxMoney = 0
  for (const curPrice of prices) {
    if (min > curPrice) {
      min = curPrice
    } else if (curPrice - min > maxMoney) {
      maxMoney = curPrice - min
    }
  }
  return maxMoney
}
