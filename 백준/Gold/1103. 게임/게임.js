const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input.shift().split(' ').map(Number);

const board = input.map((i) => i.split(''));
const dp = Array.from({ length: row }, () => Array(col).fill(0));

const dirs = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function dfs(r, c) {
  if (r < 0 || r >= row || c < 0 || c >= col || board[r][c] === 'H') return 0;
  if (dp[r][c] > 0) return dp[r][c];
  if (dp[r][c] === -1) throw new Error();

  dp[r][c] = -1;

  const k = Number(board[r][c]);
  let best = 0;
  for (const [dr, dc] of dirs) {
    best = Math.max(best, dfs(r + dr * k, c + dc * k) + 1);
  }
  dp[r][c] = best;
  return best;
}

try {
  console.log(dfs(0, 0));
} catch {
  console.log(-1);
}
