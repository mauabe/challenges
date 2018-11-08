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



/*
Array isSubset
Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.
Examples
Input	Output
array:
[ 1, 2, 3, 4 ]
sub:
[ 2, 3, 4 ]	true
array:
[ 2, 2, 2, 3, 4 ]
sub:
[ 2, 4, 3 ]	true
array:
[ 2, 3, 3, "a" ]
sub:
[ 3, 3, 3, "a" ]	false
*/

// function isSubsetOf (array, sub) {
//   if(sub[0] === undefined){return true};
//   for (let i = 0; i < sub.length; i++){
//     if(array.indexOf(sub[i], 0) === -1){
//       return false;}
//     else {array[array.indexOf(sub[i])] = null};
//     }
//   isSubset(array, sub);
//   return true;
// }


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