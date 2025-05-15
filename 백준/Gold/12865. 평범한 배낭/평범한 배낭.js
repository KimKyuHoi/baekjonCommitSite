const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const items = input.map((v) => v.split(' ').map(Number));

const dp = Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  const [weight, value] = items[i];

  // 역순으로 돌면서 이전 상태 기반으로 갱신
  for (let j = K; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
  }
}

console.log(dp[K]); // K 무게일 때 가능한 최대 가치
