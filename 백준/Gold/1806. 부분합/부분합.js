const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number)).flat();

function solution(N, S, arr) {
  let i = 0;
  let sum = 0;
  let left = 0;
  let minLength = Infinity;
  // console.log(Number.isInteger(arr[0]));

  while (i < N) {
    if (sum >= S) {
      minLength = Math.min(minLength, i - left);
      // console.log('minLength', minLength);
      sum -= arr[left];
      // console.log('sum', sum);
      left++;
      // console.log('left', left);
    } else {
      sum += arr[i];
      // console.log(sum);
      // console.log('else문 sum', sum, 'i', i);
      i++;
    }
  }

  while (sum >= S) {
    minLength = Math.min(minLength, i - left);
    sum -= arr[left];
    left++;
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(solution(N, S, arr));

// 5    / i = 0
// 5 1 /  i = 1
// 5 1 3  / i = 2
// 5 1 3 5 / i = 3
// 5 1 3 5 10 / i = 4
// 1 3 5 10 / left = 1 min = 5 i = 4
// 3 5 10 / min = 4 left = 2 i = 4
// 5 10 / min = 3 left = 3 i = 4
// 10 / min = 2 left = 4 i = 4
// 10 7 /
// 7 / min = 2 left = 5
// 7 4 / i = 5
// 7 4 9 i = 6
// 4 9
