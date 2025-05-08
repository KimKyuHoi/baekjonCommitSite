const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(N, K) {
  const MAX = 100001;
  const time = Array(MAX).fill(-1);
  const ways = Array(MAX).fill(0);
  const queue = [];

  queue.push(N);
  time[N] = 0;
  ways[N] = 1;

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;

      if (time[next] === -1) {
        // 처음 방문
        time[next] = time[current] + 1;
        ways[next] = ways[current];
        queue.push(next);
      } else if (time[next] === time[current] + 1) {
        // 같은 시간에 다른 경로로 도달
        ways[next] += ways[current];
      }
    }
  }

  console.log(time[K]);
  console.log(ways[K]);
}

solution(N, K);
