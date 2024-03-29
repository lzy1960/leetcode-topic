function mergeTwoLists (l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const prehead = new ListNode(-1)
  let prev = prehead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return prehead.next
}
