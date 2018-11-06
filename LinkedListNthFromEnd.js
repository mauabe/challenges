/*
Linked List Nth From End


You are given the head of a linked list, a value to be inserted, and an offset n. 
Write a function that inserts the provided value n spaces from the end of the linked list.

Explanation:

You are given a linked list as shown:

A -> B -> C -> D -> E -> null

Calling insertFromEnd(linkedList, X, 2) would return the following:

A -> B -> C -> X -> D -> E -> null

An offset of 0 should place the value at the end of the list.
An offset that is equal to the length of the list should place the value at the head of the list.
An offset that is greater than the length of the list should return the original linked list unmodified.

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space

Node(val)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}
*/

var insertFromEnd = function(linkedList, value, offset) {
  let front = linkedList;
  let back = linkedList;
  let counter = 0;
  
  function Node (value) {
    var obj = {};
    obj.value = value || null;
    obj.next = null;
    return obj;
  }
  
  let insert = new Node(value);
        
  while(front){
    if (counter > offset){ back = back.next}
    front = front.next;
    counter++;
  }

  if(counter < offset){return linkedList};
    
  if(offset === counter){
    insert.next = linkedList;
    return insert;
  }

  insert.next = back.next;
  back.next = insert;
  return linkedList;
  
};
  


//tests

var should = chai.should();

var stringify = function(list) {
  var res = [];
  while(list !== null) {
    res.push(list.value);
    list = list.next;
  }
  return res.join("");
}


describe('insertFromEnd', function(){
  it('should be exist', function(){
    should.exist(insertFromEnd);
  });

  it('should be a function', function(){
    insertFromEnd.should.be.a.Function;
  });

  it('should take at least three arguments', function(){
    insertFromEnd.length.should.be.above(2);
  });

  it('should return something', function() {
    var result = insertFromEnd(Node('A'), 'B', 0);
    should.exist(result);
  });
  
  it('should return a list with a value inserted at the correct position', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'ABCFDE';
    var result = stringify(insertFromEnd(list, 'F', 2))

    expected.should.be.equal(result);
  });

  it('should return a list with a value inserted at the correct position', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'AFBCDE';
    var result = stringify(insertFromEnd(list, 'F', 4))

    expected.should.be.equal(result);
  });

  it('should return the same list when the offset is greater than the length of the list', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var original = stringify(list);
    var result = stringify(insertFromEnd(list, 'F', 100))

    original.should.be.equal(result);
  });

  it('should return a list with a value appended to the end when offset is 0', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = stringify(list) + 'F';
    var result = stringify(insertFromEnd(list, 'F', 0))

    expected.should.be.equal(result);
  });


  it('should return a list with a value inserted at the head when offset is equal to length', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'FABCDE';
    var result = stringify(insertFromEnd(list, 'F', 5))

    expected.should.be.equal(result);
  });

});