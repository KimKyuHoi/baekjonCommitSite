const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((v) => v.split('').map(Number));
let visited = Array.from({ length: N }, () => Array(M).fill(false));

function solution(N, M, board) {
  const dx = [1, -1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];

  function bfs(x, y) {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          !visited[nx][ny] &&
          board[nx][ny] === 1
        ) {
          visited[nx][ny] = true;
          board[nx][ny] = board[cx][cy] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    return board[N - 1][M - 1];
  }

  return bfs(0, 0);
}

console.log(solution(N, M, board));
