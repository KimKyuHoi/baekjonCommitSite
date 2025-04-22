const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graphData = input.map((line) => line.split(' ').map(Number));

function dfs(graph, visited, start) {
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();

    if (!visited.has(node)) {
      // console.log(node);
      visited.add(node);

      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}

function solution(N, M, graphData) {
  const graph = Array.from({ length: N + 1 }, () => []);

  graphData.forEach(([u, v]) => {
    // console.log(u, v);
    graph[u].push(v);
    graph[v].push(u);
  });

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const visited = new Set();
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited.has(i)) {
      dfs(graph, visited, i);
      count++;
    }
  }

  console.log(count);
}

solution(N, M, graphData);
