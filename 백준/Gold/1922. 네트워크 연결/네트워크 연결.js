const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const M = Number(input.shift());
const cost = input.map((v) => v.split(' ').map(Number));

function solution(N, M, cost) {
  cost.sort((a, b) => a[2] - b[2]);

  const parent = Array.from({ length: N + 1 }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX;
  }

  let answer = 0;
  let count = 0;
  for (const [a, b, c] of cost) {
    if (find(a) !== find(b)) {
      union(a, b);
      answer += c;
      count++;
      if (count === N - 1) break;
    }
  }

  return answer;
}

console.log(solution(N, M, cost));
