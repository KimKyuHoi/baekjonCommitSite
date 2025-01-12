const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 사람의 수 N
const N = +input.shift();

const rope = input.map(Number).sort((a, b) => b - a);

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push(rope[i] * (i + 1));
}

console.log(Math.max(...answer));
