

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  ListNode DH = new ListNode(0);
  ListNode p = l1, q = l2, curr = DH;
  
  let carry = 0;
  while (p != null || q != null) {
      let x = (p != null) ? p.val : 0;
      let y = (q != null) ? q.val : 0;
      let sum = carry + x + y;
      carry = sum / 10;
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p != null) p = p.next;
      if (q != null) q = q.next;
  }
  if (carry > 0) {
      curr.next = new ListNode(carry);
  }
  return DH.next;   
};