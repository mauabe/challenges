function binarySearch(array, target) { 
	
  const helper = function(array, target, pointerLow, pointerHigh){
		pointerLow = 0;
		pointerHigh = array.length-1;
		let middle = Math.floor((pointerLow + pointerHigh)/2);
		while (pointerLow <= pointerHigh){
			if (target === array[middle]){return middle;}
			else if	(target < array[middle]){
				pointerHigh = middle - 1;
			}
			else {
				pointerLow = middle + 1;
			}
		}
		return -1;
	}
	
	return helper(array, target, 0, array.length-1)
	
}