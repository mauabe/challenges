function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }
  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
