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

function angryProfessor(k, a) {
  let classCancelled = true;
  const storage = { count: 0 };

  for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) { storage.count += 1; }
  }

  if (storage.count >= k) { classCancelled = false; }
  const classCancelation = function (x) {
      if (x === false) { return "NO" }
      else if (x === true) { return "YES" }
  }

  return classCancelation(classCancelled)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const t = parseInt(readLine(), 10);
    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');
        const n = parseInt(nk[0], 10);
        const k = parseInt(nk[1], 10);
        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
        let result = angryProfessor(k, a);
        ws.write(result + "\n");
    }
    ws.end();
}

console.log(angryProfessor(3, [-1, -3, 4, 2, 7, 3]))  //YES
console.log(angryProfessor(3, [-1, -3, 0, -2, , 1, 3, 9, 12, 2])) //NO