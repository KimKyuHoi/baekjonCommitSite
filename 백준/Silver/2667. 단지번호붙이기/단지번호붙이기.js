const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input.shift());
const graph = [];
const visited = Array.from({ length: N }, () => Array(N).fill(false));

let row = [0, 0, -1, 1]; // 상하 좌우
let col = [-1, 1, 0, 0];

for (let i = 0; i < N; i++) {
  graph.push(input[i].split('').map(Number));
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
          nx < N &&
          ny < N &&
          graph[nx][ny] === 1 &&
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
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      const areaSize = dfs(i, j);
      areas.push(areaSize);
    }
  }
}

console.log(areas.length);
areas.sort((a, b) => a - b);
for (let i = 0; i < areas.length; i++) {
  console.log(areas[i]);
}
