function threeNumberSum(array, targetSum) {
  array.sort((a, b) => (a - b))
	const result = [];
  for(let i = 0; i < array.length - 2; i++){
		let current = i
    let left = i + 1;
    let right = array.length - 1;
    
		while (left < right){
      let sum = array[current] + array[left] + array[right];
			if (sum === targetSum){
      	result.push([array[current], array[left], array[right]])
				left += 1;
				right -= 1;
    	}
			else if (sum < targetSum){left += 1;}
			else if (sum > targetSum){right -= 1;}
		}
  }
	return result;
}

console.log (threeNumberSum([-12, 3, 1, 2, 6, -6, 5, -8 ], 0)) // [[-8, 2, 6], [-8, 3, 5],[-6, 1, 5]]