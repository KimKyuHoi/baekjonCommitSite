const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

function solution(N, M, arr) {
  let sum = arr.reduce((a, b) => a + b);
  let left = Math.max(...arr);
  let right = sum;

  let K = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let cnt = 1;
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
      if (current + arr[i] > mid) {
        cnt++;
        current = arr[i];
      } else {
        current += arr[i];
      }
    }

    if (cnt <= M) {
      K = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return K;
}

console.log(solution(N, M, arr));
