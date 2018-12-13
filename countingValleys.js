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

function countingValleys(n, s) {
    let level = 0;
    let valleys = 0;
    let slopes = s.split("\n", 2)[1];
    for (var i in slopes) {
        level = (slopes.charAt(i) === 'U') ? level + 1 : level - 1;   
        if (level === 0 && slopes.charAt(i) === 'U') {              
            valleys += 1;                                  
        }
    }
    console.log(valleys);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const n = parseInt(readLine(), 10);
    const s = readLine();
    let result = countingValleys(n, s);
    ws.write(result + "\n");
    ws.end();
}