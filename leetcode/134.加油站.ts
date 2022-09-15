function canCompleteCircuit (gas: number[], cost: number[]): number {
  let totalGas = 0
  let totalCost = 0
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
  }
  if (totalGas < totalCost) return -1

  let currentGas = 0
  let start = 0
  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas - cost[i] + gas[i]
    if (currentGas < 0) {
      currentGas = 0
      start = i + 1
    }
  }
  return start
}
