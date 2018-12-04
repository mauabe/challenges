'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});
function readLine() {return inputString[currentLine++];}

function decentNumber(n) {
  if(n%3 === 0) {
    return new Array(n).fill(5).join('');
  }
  let altNum = n;
  while(altNum >= 5){
    altNum -= 5;
    if(altNum % 3 === 0){
        let arr = new Array(n);
        for(i = 0; i < n; i++){
            let value = i < altNum ? 5 : 3;
            arr.push(value);
        }
        return arr.join('');
    }
  }
  if(altNum === 0) {
    return new Array(n).fill(3).join('');
  }
  return -1;
}


function main() {
    const t = parseInt(readLine().trim(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);
        decentNumber(n);
    }
}