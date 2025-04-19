const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const inArr = String(input).split('').reverse().join('');

  return inArr === input.join('') ? 1 : 0;
}

console.log(solution(input));
