/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 哈希表
var copyRandomList = function (head, cachedNode = new Map()) {
  if (head === null) {
    return null
  }
  if (!cachedNode.has(head)) {
    cachedNode.set(head, { val: head.val })
    Object.assign(cachedNode.get(head), {
      next: copyRandomList(head.next, cachedNode),
      random: copyRandomList(head.random, cachedNode)
    })
  }
  return cachedNode.get(head)
};

// 迭代+节点拆分
var copyRandomList = function (head) {
  if (head === null) return null
  // 构建 原节点 1 -> 新节点 1 -> 原节点 2 -> 新节点 2 -> ... 拼接链表
  let cur = head
  while (cur !== null) {
    let tmp = new Node(cur.val)
    tmp.next = cur.next
    cur.next = tmp
    cur = tmp.next
  }
  // 构建新链表各节点的random指向
  cur = head
  while (cur !== null) {
    if (cur.random !== null) {
      cur.next.random = cur.random.next
    }
    cur = cur.next.next
  }
  // 重新遍历链表，把新老链表拆开
  cur = head.next
  let pre = head, res = head.next
  while (cur.next !== null) {
    pre.next = pre.next.next
    cur.next = cur.next.next
    pre = pre.next
    cur = cur.next
  }
  pre.next = null
  return res
}
