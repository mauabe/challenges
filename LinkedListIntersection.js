/*
Linked List Intersection
Write a function linkedListIntersection that returns the node at which the intersection of two linked lists begins, or null if there is no such intersection.

Example:

Given the following two linked lists list1 and list2, linkedListIntersection(list1,list2) should return D as the node of intersection.

   A → B → C
            ↘
              D → E → F
            ↗
       X → Y
Given the following two linked lists list1 and list2, linkedListIntersection(list1,list2) should return NULL as there is no point of intersection.

   A → B → C → D
   X → Y → Z
You've got Helpers! (click to view code)
Node(val)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

*/

const linkedListIntersection = (list1, list2) => {

  function Node (val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
  }
  // OPTION - if tail1 !== tail 2, return null (no intersection)

  // PUSH INTO HASH, set list 1 to flag, and compare to list2
  //  const cache = {};
  //   while (list2) {
  //     cache[list2.value] = val;
  //     list2 = list2.next;
  //   }
  //   while (list1) {
  //     cache[list1.value] = flag;
  //     list1 = list1.next;
  //   }
  //   while (list2) {
  //     if(cache[list2.value] = flag) {return list2;}
  //     list2 = list2.next;
  //   }
  //   return null
  // }

  if (list1 === null || list2 === null) return null;

  var p1 = list1;
  var p2 = list2;
  while (p1 !== null && p2 !== null && p1 !== p2) {
      p1 = p1.next;
      p2 = p2.next;
      
      if (p1 == p2) return p1;
      if (p1 === null) p1 = list2;
      if (p2 === null) p2 = list1;
  }
  return p1;
  };

