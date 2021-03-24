// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

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