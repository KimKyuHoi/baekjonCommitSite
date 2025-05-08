const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, K] = input.shift().split(' ').map(Number);
const board = input.map((v) => v.split(' ').map(Number));

function solution(N, M, K, board) {
  let fMap = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    fMap[board[i][0] - 1][board[i][1] - 1] = 1;
  }

  const dx = [1, -1, 0, 0]; //상하좌우
  const dy = [0, 0, -1, 1];
  let maxCnt = 0;

  function bfs(x, y) {
    const queue = [[x, y]];
    fMap[x][y] = 0;
    let cnt = 1;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < M && fMap[nx][ny] === 1) {
          cnt++;
          fMap[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    return cnt;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (fMap[i][j] === 1) {
        const size = bfs(i, j);
        if (size > maxCnt) maxCnt = size;
      }
    }
  }

  return maxCnt;
}

console.log(solution(N, M, K, board));
