function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;
  const damage = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const d = type === 1 ? -degree : degree;
    damage[r1][c1]     += d;
    damage[r1][c2 + 1] -= d;
    damage[r2 + 1][c1] -= d;
    damage[r2 + 1][c2 + 1] += d;
  }

  for (let i = 0; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      damage[i][j] += damage[i][j - 1];
    }
  }

  for (let j = 0; j <= M; j++) {
    for (let i = 1; i <= N; i++) {
      damage[i][j] += damage[i - 1][j];
    }
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] + damage[i][j] > 0) answer++;
    }
  }

  return answer;
}
