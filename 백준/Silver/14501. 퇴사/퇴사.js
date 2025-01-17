const [n, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
const N = Number(n);
const counsel = arr.map((tp) => tp.split(' ').map(Number));
let DP = new Array(N).fill(0);

const solution = (n, counsel) => {
  for (let i = 0; i < n; i++) {
    const [period, profit] = counsel[i];
    if (i + period > N) continue;
    DP[i] = DP[i] + profit;

    for (let j = i + period; j < N; j++) {
      DP[j] = Math.max(DP[j], DP[i]);
    }
  }

  return Math.max(...DP);
};

console.log(solution(N, counsel));
