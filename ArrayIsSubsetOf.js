/*
Is Subset Of
Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.
*/

Array.prototype.isSubsetOf = function(sub) {
  const storage = {};
  for (let i  = 0; i < sub.length; i++){
    if(!storage[sub[i]]){
      storage[sub[i]] = 1;
    } else {
      storage[sub[i]] += 1;
    }
  }
  for (let j = 0; j < this.length; j++){
    if(!storage[this[j]]){
      return false;
    }
  }
  return true;
};



<<<<<<< HEAD

=======
>>>>>>> 84e0a77123573d9aba8160c37434acd706d762a4
console.log(['merge','reset','reset'].isSubsetOf(['reset','merge','add','commit'])) // true
console.log([ 1, 2, 3, 4 ].isSubsetOf([ 2, 3, 4 ]));
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox', 'cat']));
// // true (if all elements in first array are in the second)
console.log(['cat', 'dog', 'cow'].isSubsetOf(['dog', 'cow', 'fox'])); // false
// // not all elements in first array are in the second
console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat', 'dog'])); // true
console.log(['cat', 'dog'].isSubsetOf(['cat', 'cat', 'dog'])); // true
console.log(['cat', 'cat', 'dog'].isSubsetOf(['cat'])); // false
console.log(['cat' , 'dog'].isSubsetOf(['dog', 'cat'])); // true
console.log([1, 'cat', 3].isSubsetOf([4, 3, 'cat', 1])); // true 
