const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function solution(N, S, arr) {
  let minLength = Infinity;
  let sum = 0;
  let left = 0,
    right = 0;
  while (right < N) {
    if (sum < S) {
      sum += arr[right];
      right++;
      // console.log('sum < S ||', sum, right);
    } else {
      minLength = Math.min(minLength, right - left);
      // console.log('else minLength', minLength);
      sum -= arr[left];
      left++;
      // console.log('else sum > S', sum, left);
    }
  }

  while (sum >= S) {
    minLength = Math.min(minLength, right - left);
    sum -= arr[left];
    left++;
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(solution(N, S, arr));
