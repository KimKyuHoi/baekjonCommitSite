const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = input[0];
const numbers = input[1].split(' ').map(Number);

function solution(n, arr) {
  let right = n - 1;
  let left = 0;
  let minSum = Infinity;
  let result = [];

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (Math.abs(sum) < minSum) {
      minSum = Math.abs(sum);
      result = [arr[left], arr[right]];
    }

    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return result[0] + ' ' + result[1];
}

console.log(solution(N, numbers));
