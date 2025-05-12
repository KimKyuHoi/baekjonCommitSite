const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const solve = input.join(' ').split(' ').map(Number);

function solution(N, solve) {
  let count = 0;
  solve.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    let target = solve[i];
    let left = 0;
    let right = solve.length - 1;

    while (left < right) {
      const sum = solve[left] + solve[right];

      if (left === i) {
        left++;
        continue;
      } else if (right === i) {
        right--;
        continue;
      }

      if (sum === target) {
        count++;
        break;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}

console.log(solution(N, solve));
