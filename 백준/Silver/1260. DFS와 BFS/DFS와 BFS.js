const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const graph = input.map((line) => line.split(' ').map(Number));

function dfs(graph, start, dfsArr) {
  const visited = new Set();
  const stack = [start];

  while (stack.length) {
    const node = stack.pop();

    if (!visited.has(node)) {
      dfsArr.push(node);
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

function bfs(graph, start, bfsArr) {
  const visited = new Set();
  const queue = [start];

  visited.add(start);

  while (queue.length) {
    const node = queue.shift();
    bfsArr.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

function solution(N, M, V, graphData) {
  const graph = Array.from({ length: N + 1 }, () => []);

  graphData.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  for (let i = 1; i <= N; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsArr = [];
  const bfsArr = [];

  dfs(graph, V, dfsArr);
  bfs(graph, V, bfsArr);

  console.log(dfsArr.join(' '));
  console.log(bfsArr.join(' '));
}

solution(N, M, V, graph);
