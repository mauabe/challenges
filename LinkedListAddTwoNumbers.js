function ListNode(val) {
  this.val = val;
  this.next = null;
}
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let curr = head;
  let carry = 0;
  
  if (!l1 && !l2 && !carry) {return null;}
  carry = carry || 0;
  let valRes = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
  let nextCarry = 0;
  if (valRes >= 10) {
      nextCarry = Math.floor(valRes / 10);
      valRes = valRes % 10;
  }

  let result = new ListNode(valRes);
  result.next = addTwoNumbers((l1 ? l1.next : null), (l2 ? l2.next : null), nextCarry);
  return result;
};