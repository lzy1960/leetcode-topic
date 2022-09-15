function mergeTwoLists (list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let cur = new ListNode()
  const dummy = cur

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  if (!list1) {
    cur.next = list2
  }
  if (!list2) {
    cur.next = list1
  }
  return dummy.next
}
