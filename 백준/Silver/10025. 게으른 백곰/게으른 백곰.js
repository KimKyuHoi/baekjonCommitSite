const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, K] = [...input.shift().split(' ').map(Number)];
const SIZE = 1000001;
const bucket = new Array(SIZE).fill(0);

for (let i = 0; i < N; i++) {
  const [g, x] = input[i].split(' ').map(Number);
  bucket[x] += g;
}

// console.log(bucket);

const windowSize = 2 * K + 1;
let sum = 0;
for (let i = 0; i < windowSize && i < SIZE; i++) {
  sum += bucket[i];
}

let maxSum = sum;

for (let i = windowSize; i < SIZE; i++) {
  sum += bucket[i] - bucket[i - windowSize];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
