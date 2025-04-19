const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

function solution(n, m, arr) {
  let sum = 0;

  for (let i = 0; i < m; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  for (let j = m; j < n; j++) {
    sum = sum + arr[j] - arr[j - m];

    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

console.log(solution(n, m, numbers));
