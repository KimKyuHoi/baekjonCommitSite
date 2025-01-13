const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const N = input.map(Number).sort((a, b) => b - a);

const sum = N.reduce((acc, cur) => acc + cur);

console.log(sum % 3 === 0 && N.includes(0) ? N.join('') : -1);
