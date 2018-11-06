/*
Stack
Implement a stack with the following restrictions and methods:

Restrictions:
* Do not use an array as storage

Methods:
* size should return an integer representing the number of elements in the stack.
* peek should return the top item of the stack without removing it. 
If the stack is empty, it should return null.
* push should add an item to the top of the stack. It should also accept multiple 
arguments and push them to the stack in order. It should return the topmost value 
of the stack after the pushing.
* pop should remove an item off the top of the stack and returned the removed value.

*/

//SOLVED

var Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  
  if(initialValue !== undefined){
    this.storage[this.count] = initialValue;
    this.count++;
  }
};

Stack.prototype.size = function() {
  if (this.count > 0){return this.count}
  else {return 0}
  return this.count
};

Stack.prototype.peek = function() {
  if (this.count > 0){return this.storage[this.count-1]}
  else {return null};
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value
 this.count++;
};

Stack.prototype.pop = function() {
  let last = this.storage[this.count-1]
  delete this.storage[this.count-1];
  if (this.count > 0){this.count--}
  else {last = null}
  return last;
  
};