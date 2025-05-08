const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const M = Number(input.shift());
const board = input.map((v) => v.split(' ').map(Number));

function solution(N, M, board) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(false);

  for (let i = 0; i < M; i++) {
    const [a, b] = board[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  let count = 0;

  function dfs(node) {
    visited[node] = true;
    for (let next of graph[node]) {
      if (!visited[next]) {
        count++;
        dfs(next);
      }
    }
  }

  dfs(1);

  return count;
}

console.log(solution(N, M, board));
