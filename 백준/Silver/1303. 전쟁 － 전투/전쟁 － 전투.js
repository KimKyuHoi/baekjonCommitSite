const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const board = input.map((v) => v.split(''));
let visited = Array.from({ length: M }, () => Array(N).fill(false));

function solution(N, M, board) {
  const dx = [1, -1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];

  let whiteP = 0,
    blackP = 0;

  function bfs(x, y) {
    const queue = [[x, y]];
    let cnt = 1;
    visited[x][y] = true;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = cx + dx[i];
        let ny = cy + dy[i];

        if (
          nx >= 0 &&
          nx < M &&
          ny >= 0 &&
          ny < N &&
          !visited[nx][ny] &&
          board[cx][cy] === board[nx][ny]
        ) {
          cnt++;
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }

    return cnt ** 2;
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        if (board[i][j] === 'W') whiteP += bfs(i, j);
        else if (board[i][j] === 'B') blackP += bfs(i, j);
      }
    }
  }

  return whiteP + ' ' + blackP;
}

console.log(solution(N, M, board));
