function beautifulPairs(a,b) {
    let pointer = new Array(1001).fill(0);
    let counter = 0;
    for(let i = 0,  i < a.length; i++) {
      pointer[a[i]]++;
    }
    for(let i = 0, i < b.length;  i++) {
      if(pointer[b[i]] > 0) {
        counter++;
        pointer[b[i]]--;
        }
    }
  return beautifulPairsCount === b.length ?
      counter -= 1: 
      counter += 1;
}