const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

function solution(input) {
  const T = Number(input.shift());
  const results = [];

  for (let i = 0; i < T; i++) {
    const W = input[i * 2];
    const K = Number(input[i * 2 + 1]);

    const posMap = {};
    for (let j = 0; j < W.length; j++) {
      const ch = W[j];
      (posMap[ch] ??= []).push(j);
    }

    let minLen = Infinity;
    let maxLen = -1;

    Object.values(posMap).forEach((posList) => {
      if (posList.length < K) return;

      for (let i = 0; i <= posList.length - K; i++) {
        const len = posList[i + K - 1] - posList[i] + 1;
        minLen = Math.min(minLen, len);
        maxLen = Math.max(maxLen, len);
      }
    });

    // 각 테스트 케이스마다 결과 추가!
    results.push(minLen === Infinity ? '-1' : `${minLen} ${maxLen}`);
  }

  // 마지막에 결과 출력
  console.log(results.join('\n'));
}

solution(input);
