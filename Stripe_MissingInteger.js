// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

const missingInteger = function(array){
  if(array.length === 0){return 1};
  array = [...new Set(array)];  //remove dups
  
  //remove negative ints 
  // for(let i = 0; i < array.length; i++){
  //   if(array[i] < 0){array.splice(i, 1)}
  // }     

  array.sort((a, b) => a - b); //sort array

  // console.log(array);
  for(let j = 0; j <= array.length; j++){
    if(array.indexOf(j + 1) === -1){
      return (j + 1) 
    }
  }
};

// testing
const array1 = [3, 4, -1, 1, 2 ,-1, 1, 0, 0, 1, 1, 10, 5, 2];  // 6
const array2 = [-1, ~1];  //2
const array3 = [7,8,9,11,12];  // 1


console.log(missingInteger(array1));
console.log(missingInteger(array2));
console.log(missingInteger(array3));