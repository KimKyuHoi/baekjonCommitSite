const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);
const A = [...input[1].split(' ').map(Number)];
const M = Number(input[2]);
const queries = input.slice(3).map((line) => line.split(' ').map(Number));
// console.log(queries);

function solution(N, A, M, queries) {
  let result = [];
  const dp = Array.from({ length: N }, () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    dp[i][i] = 1;
  }

  for (let len = 2; len <= N; len++) {
    for (let i = 0; i <= N - len; i++) {
      const j = i + len - 1;

      if (A[i] === A[j]) {
        if (len === 2) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
    }
  }

  for (let k = 0; k < M; k++) {
    result.push(dp[queries[k][0] - 1][queries[k][1] - 1]);
  }

  return result.join('\n');
}

console.log(solution(N, A, M, queries));
