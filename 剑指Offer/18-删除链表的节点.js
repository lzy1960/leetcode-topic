/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let pre = head
  let cur = head.next
  while (cur !== null && cur.val !== val) {
    pre = cur
    cur = cur.next
  }
  if (cur !== null) pre.next = cur.next
  return head
};