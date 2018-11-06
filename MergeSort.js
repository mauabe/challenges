/*
Merge Sort
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

*/


function mergeSort(array) {
	if(array.length <= 1){return array};
	let middle = Math.floor(array.length/2);
	
	let lowArray = array.slice(0, middle);
	let highArray = array.slice(middle);
		
	return mergerFunc(mergeSort(lowArray), mergeSort(highArray));
}
	
const mergerFunc = function(lowArray, highArray){
	const result = new Array(lowArray.length + highArray.length);
	let i = 0;
	let j = 0;
	let k = 0;

	while(i < lowArray.length && j < highArray.length){
		if(lowArray[i] <= highArray[j]){
			result[k] = lowArray[i];
			k++;
			i++;
		} else {
			result[k] = highArray[j];
			k++;
			j++
		}
	}
			
	while(i < lowArray.length){
		result[k] = lowArray[i];
		k++;
		i++;
	};
		
	while(j < highArray.length){
		result[k] = highArray[j];
		k++;
		j++;
	};
		
		return result;
	}
