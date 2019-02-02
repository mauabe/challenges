'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('ascii');
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

function designerPdfViewer(h, word) {
  let maxHeight = 1;
  for (let letter of word) {
    maxHeight = Math.max(maxHeight, h[letter.charCodeAt(0) - 97]);
    if (maxHeight === 7) break;
  }
  console.log(word.length * maxHeight);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));
    const word = readLine();
    let result = designerPdfViewer(h, word);
    ws.write(result + "\n");
    ws.end();
}

console.log(designerPdfViewer([1,3,1], abc));