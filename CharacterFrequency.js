/*
Character Frequency
Write a function that takes as its input a string and returns 
an array of arrays as shown below sorted in descending order by 
frequency and then by ascending order by character.

Examples
Input	Output
string:
"aaabbc"	[ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
string:
"mississippi"	[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
string:
""	[ ]
*/


function characterFrequency (string) {
  let storage = {};
  let result = [];

  for(let char of string.toLowerCase()){
    if (storage[char]){
      storage[char]++;
    } else {
      storage[char] = 1;
    }
    char++;
  }
  //console.log(storage)
   for(let key in storage){
    result = Object.keys(storage).map(prop => ([prop, storage[prop]]))
  }
  //console.log(result)
  result.sort((a, b) => (a[1] < b[1]) ? 1 : -1);
  console.log(result)
  return result;


  }

console.log(characterFrequency ("MissiSSippi"))