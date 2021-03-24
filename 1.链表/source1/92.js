/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let ret = new ListNode(0, head)
  let p = ret
  let cnt = right - left + 1

  while (--left) {
    p = p.next
  }

  p.next = reverseN(p.next, cnt)
  return ret.next

};

function reverseN(head, n) {
  if (n === 1) return head
  let tail = head.next
  let p = reverseN(head.next, n - 1);
  head.next = tail.next
  tail.next = head
  return p
}