const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const [N, K] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

function solution(N, K) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      count++;
      if (count === K) {
        return i; // K번째 약수 출력
      }
    }
  }

  return 0; // 약수 개수가 K보다 작을 때
}

console.log(solution(N, K));
