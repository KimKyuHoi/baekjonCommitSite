const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, w, L] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

function solution(n, w, l, arr) {
  const bridge = Array(w).fill(0);
  let time = 0;
  let sum = 0;
  let i = 0;
  while (i < n) {
    time++;
    sum -= bridge.shift();
    if (sum + arr[i] <= l) {
      bridge.push(arr[i]);
      sum += arr[i];
      i++;
    } else {
      bridge.push(0);
    }
  }
  return time + w;
}

console.log(solution(n, w, L, numbers));
