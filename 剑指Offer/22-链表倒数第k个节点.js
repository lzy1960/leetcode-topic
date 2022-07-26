/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 找两边
var getKthFromEnd = function (head, k) {
  let count = 0
  let dummy = head
  while (head) {
    dummy = dummy.next
    count++
  }
  dummy = head
  for (let i = 0; i < count - k; i++) {
    dummy = dummy.next
  }
  return dummy
};

// 双指针
var getKthFromEnd = function (head, k) {
  let fast = head, slow = head
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
