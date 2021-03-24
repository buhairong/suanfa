/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let ret = new ListNode(0, head)
  let p = ret
  let q = p.next
  while((p.next = reverseN(q, k)) != q) {
    p = q
    q = p.next
  }

  return ret.next
};

var reverseN = function(head, n) {
  let p = head
  let cnt = n
  while(--n && p) p = p.next
  if (p === null) return head
  return __reverseN(head, cnt)
};

var __reverseN = function(head, n) {
  if(n === 1) return head
  let tail = head.next
  let p = __reverseN(head.next, n-1)
  head.next = tail.next
  tail.next = head
  return p
};