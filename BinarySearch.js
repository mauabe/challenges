function binarySearch(array, target) { 
	return BSHelper(array, target, 0, array.length - 1)
}

function BSHelper (array, target, pointerLow, pointerHigh){

	while (pointerLow <= pointerHigh){
		let middle = Math.floor((pointerLow + pointerHigh)/2);
		if (target === array[middle]){return middle;}
		else if	(target < array[middle]){
			pointerHigh = middle - 1;
		}
		else {
			pointerLow = middle + 1;
		}
	}
	if(pointerLow > pointerHigh){return -1;}
}
	