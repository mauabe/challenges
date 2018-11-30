'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function birthdayCakeCandles(ar) {
  let tallest = 0;
  for(let i = 0; i < ar.length; i++){
    // if(ar[i] === Math.max(...ar)){tallest += 1;}  //timed out with large arrays
    // if(ar[i] === ar.reduce(function(a,b){return Math.max(a,b)})){tallest += 1;}
    if(ar[i] === ar.reduce((a,b) => Math.max(a,b))){tallest += 1;}

  }
  return tallest;
}

console.log(birthdayCakeCandles([3,2,1,3,3,3]))  //4
//console.log(Math.max(3,2,1,3 ))

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const arCount = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = birthdayCakeCandles(ar);
    ws.write(result + "\n");
    ws.end();
}
