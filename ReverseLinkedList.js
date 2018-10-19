/* 
Linked List Reverse
Write a function that reverses a linked list.

Explanation:

Given the below linked list:

A -> B -> C -> D -> E -> null

Return:

E -> D -> C -> B -> A -> null

‘Constraint 1: Do this in linear time’

‘Constraint 2: Do this in constant space’

‘Constraint 3: Do not mutate the original nodes by adding any new properties’

Helper function:
Node(val)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

*/

var reverseLinkedList = function(linkedList) {
  
  //initiate useful pointers: prev curr  next 
  //traverse trhough linkedlist
  //assign curr/ net to previous
  //assign prev to curr
  //assing curr to next

  let prev = null;
  let curr = linkedList;
  let next = linkedList.next;
  
  while (curr){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next
  }
  
  return prev
};