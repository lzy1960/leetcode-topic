class LRUCache {
  capacity: number
  cacheList: Map<number, number>
  constructor (capacity: number) {
    this.capacity = capacity
    this.cacheList = new Map()
  }

  get (key: number): number {
    if (this.cacheList.has(key)) {
      const findVal = this.cacheList.get(key)!
      this.cacheList.delete(key)
      this.cacheList.set(key, findVal)
      return findVal
    }
    return -1
  }

  put (key: number, value: number): void {
    if (this.cacheList.has(key)) {
      this.cacheList.delete(key)
    } else if (this.cacheList.size >= this.capacity) {
      // Map.keys().next() 迭代器，取出的是最早放进去的
      this.cacheList.delete(this.cacheList.keys().next().value)
    }
    this.cacheList.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
