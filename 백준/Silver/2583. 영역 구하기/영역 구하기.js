const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [M, N, K] = input.shift().split(' ').map(Number);
const graph = Array.from({ length: M }, () => Array(N).fill(0));
const visited = Array.from({ length: M }, () => Array(N).fill(false));

let row = [0, 0, -1, 1]; // 상하 좌우
let col = [-1, 1, 0, 0];

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);

  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      graph[y][x] = 1;
    }
  }
}

function dfs(x, y) {
  let stack = [[x, y]];
  let count = 0;

  while (stack.length) {
    const [cx, cy] = stack.pop();
    if (!visited[cx][cy]) {
      visited[cx][cy] = true;
      count++;

      for (let i = 0; i < 4; i++) {
        const nx = cx + row[i];
        const ny = cy + col[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < M &&
          ny < N &&
          graph[nx][ny] === 0 &&
          !visited[nx][ny]
        ) {
          stack.push([nx, ny]);
        }
      }
    }
  }
  return count;
}

let areas = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0 && !visited[i][j]) {
      const areaSize = dfs(i, j);
      areas.push(areaSize);
    }
  }
}

console.log(areas.length);
console.log(areas.sort((a, b) => a - b).join(' '));
